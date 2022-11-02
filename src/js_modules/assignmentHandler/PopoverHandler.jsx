import {
  Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { LinkIcon } from '@chakra-ui/icons';
import Icon from '../../common/components/Icon';
import bc from '../../common/services/breathecode';
import iconDict from '../../common/utils/iconDict.json';
import Link from '../../common/components/NextChakraLink';
import useStyle from '../../common/hooks/useStyle';

const PopoverHandler = ({ task, githubUrl, haveGithubDomain }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [assetData, setAssetData] = useState(null);
  const [fileData, setFileData] = useState([]);
  const { t } = useTranslation('assignments');
  const { backgroundColor, hexColor } = useStyle();
  const toast = useToast();

  const isUrl = assetData?.delivery_formats.includes('url');
  const fileUrl = 'https://storage.googleapis.com/';

  const handleOpen = async (currentTask) => {
    if (currentTask && currentTask?.task_type === 'PROJECT' && currentTask.task_status === 'DONE') {
      const assetResp = await bc.lesson().getAsset(currentTask.associated_slug);
      if (assetResp && assetResp.status < 400) {
        const data = await assetResp.data;
        setAssetData(data);

        if (!data?.delivery_formats.includes('url')) {
          const fileResp = await bc.todo().getFile({ id: currentTask.id });
          if (fileResp && fileResp.status < 400) {
            const respData = await fileResp.data;
            setFileData(respData);
            setSettingsOpen(true);
          } else {
            toast({
              title: t('alert-message:current-task-no-files'),
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
          }
        } else {
          setSettingsOpen(true);
        }
      }
    }
  };

  return (
    <Box width={githubUrl ? 'auto' : '4%'}>
      <Popover
        id="Avatar-Hover"
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        trigger="click"
      >
        <PopoverTrigger>
          <Button onClick={() => handleOpen(task)} width="40px" padding="0" background={backgroundColor}>
            <Icon icon="hamburger" width="26px" height="26px" color={hexColor.black} />
          </Button>
        </PopoverTrigger>
        {assetData && assetData?.delivery_formats && (
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              {!isUrl && fileData?.length > 0
                ? t('label.files-received', { files: fileData?.length })
                : t('label.link-received')}
            </PopoverHeader>
            <PopoverBody>
              {isUrl ? (
                <Link variant="default" display="flex" gridGap="6px" href={githubUrl || '#'} target="_blank" rel="noopener noreferrer">
                  {githubUrl && haveGithubDomain && (
                    <Icon icon="github" width="20px" height="20px" style={{ minWidth: '20px' }} color={hexColor.black} />
                  )}
                  {githubUrl && !haveGithubDomain && !githubUrl.includes(fileUrl) && (
                    <LinkIcon width="20px" height="20px" style={{ minWidth: '20px' }} />
                  )}
                  {githubUrl && !haveGithubDomain && githubUrl.includes(fileUrl) && (
                    <Icon icon="file" width="20px" height="20px" style={{ minWidth: '20px' }} color={hexColor.black} />
                  )}
                  <Box fontSize="16px">
                    {assetData.title}
                  </Box>
                </Link>
              ) : (
                <Box display="flex" flexDirection="column" gridGap="8px" maxHeight="135px" overflowY="auto">
                  {fileData.length > 0 && fileData?.map((file) => {
                    const extension = file.name.split('.').pop();
                    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
                    const isImage = imageExtensions.includes(extension);
                    const icon = iconDict.includes(extension) ? extension : 'file';
                    return (
                      <Box display="flex">
                        <Icon icon={isImage ? 'image' : icon} width="22px" height="22px" />
                        <Link
                          key={file.id}
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="blue.500"
                          margin="0 0 0 10px"
                        >
                          {file.name}
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              )}
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

PopoverHandler.propTypes = {
  task: PropTypes.objectOf(PropTypes.any),
  githubUrl: PropTypes.string.isRequired,
  haveGithubDomain: PropTypes.bool,
};
PopoverHandler.defaultProps = {
  task: {},
  haveGithubDomain: false,
};

export default PopoverHandler;
