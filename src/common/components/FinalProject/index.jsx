import { Box, Button, Link, Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { usePersistent } from '../../hooks/usePersistent';
import Heading from '../Heading';
import Icon from '../Icon';
import Progress from '../ProgressBar/Progress';
import Text from '../Text';
import FinalProjectModal from './Modal';
import bc from '../../services/breathecode';
import FinalProjectForm from './Form';
import useStyle from '../../hooks/useStyle';
import useFinalProjectProps from '../../store/actions/finalProjectAction';

const FinalProject = ({ storyConfig, studentAndTeachers, tasks }) => {
  const { t } = useTranslation('final-project');
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [finalProject, setFinalProjects] = useState([]);
  const [cohortSession] = usePersistent('cohortSession', {});
  const router = useRouter();
  const { modal } = useStyle();
  const { finalProjectData, setFinalProjectData } = useFinalProjectProps();
  const storyConfigExists = Object.keys(storyConfig).length > 0;
  const finalProjectTranslation = storyConfig?.translation?.[storyConfig?.locale]['final-project'];
  const repoUrl = finalProjectData?.repo_url || finalProject?.currentProject?.repo_url;
  const cohortSlug = router?.query?.cohortSlug;

  const openModal = () => {
    if (repoUrl) {
      setOpenForm(true);
    } else {
      setIsOpen(true);
    }
  };
  const closeModal = () => setIsOpen(false);

  const students = studentAndTeachers.map((student) => ({
    ...student,
    user: {
      ...student?.user,
      full_name: `${student?.user?.first_name} ${student?.user?.last_name}`,
    },
  }));

  const refreshFinalProject = async () => {
    const res = await bc.todo({
      visibility_status: 'PRIVATE',
    }).getFinalProject();

    const currentProject = res?.data?.find((project) => project?.cohort?.slug === cohortSlug) || null;

    if (currentProject !== null && res.data.length > 0) {
      setFinalProjects({
        currentProject,
        allProjects: res?.data,
      });
    } else {
      setFinalProjects([]);
      setFinalProjectData({});
    }
  };

  useEffect(() => {
    if (!storyConfigExists) {
      bc.todo({
        visibility_status: 'PRIVATE',
      }).getFinalProject()
        .then((res) => {
          const currentProject = res?.data?.find((project) => project?.cohort?.slug === cohortSlug);
          if (currentProject !== undefined) {
            setFinalProjects({
              currentProject,
              allProjects: res?.data,
            });
          }
        });
    }
  }, []);

  const tasksProjects = tasks.filter((task) => task?.task_type === 'PROJECT');
  const tasksProjectCompleted = tasksProjects.filter((task) => task?.task_status === 'DONE');
  const fakeCompletedNumber = storyConfig?.completedTasks;
  const fakeTaskLengthNumber = storyConfig?.totalTasks;
  const progressPercent = fakeCompletedNumber
    ? parseInt((fakeCompletedNumber / fakeTaskLengthNumber) * 100, 10)
    : parseInt((tasksProjectCompleted?.length / tasksProjects?.length) * 100, 10);
  const isApproved = storyConfig?.approved || finalProjectData?.revision_status === 'APPROVED';

  return (
    <Box minHeight="300px" width={storyConfig?.width} background={isApproved ? 'yellow.default' : 'blue.900'} borderRadius="lg" position="relative" color="white" textAlign="center" padding="0 34px 24px 34px">
      <Box className="center-absolute-x" top="0" background="yellow.default" padding="9px" borderBottomRadius="4px">
        <Icon icon="graduationCap" width="46px" height="39px" />
      </Box>
      {isApproved ? (
        <Box paddingTop="4rem" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <Box borderRadius="lg" display="flex" flexDirection="column" gridGap="20px">
            <Heading
              size="24px"
            >
              {finalProjectTranslation?.congratulations || t('congratulations')}
            </Heading>
            <Text size="l">
              {finalProjectTranslation?.['graduated-as'] || t('graduated-as')}
            </Text>
            <Heading
              size="22px"
              fontWeight={700}
              textTransform="uppercase"
            >
              {storyConfig?.syllabusName || cohortSession?.syllabus_version?.name}
            </Heading>
          </Box>
          <Box mt="10px" padding="12px 30px">
            <Link href="/profile/certificates" target="_blank" rel="noopener noreferrer" fontSize="15px" variant="buttonDefault" background="yellow.light" color="yellow.default" _hover={{ opacity: 0.9 }}>
              {finalProjectTranslation?.['see-my-certificate'] || t('see-my-certificate')}
            </Link>
          </Box>
        </Box>
      ) : (
        <Box paddingTop="4rem">
          <Heading
            size="18px"
          >
            {finalProjectTranslation?.['what-do-you-need-to-graduate'] || t('what-do-you-need-to-graduate')}
          </Heading>
          <Text size="l" mt="10px">
            {finalProjectTranslation?.['almost-there'] || t('almost-there')}
          </Text>
          <Box display="flex" flexDirection="column" gridGap="20px" padding="0 24px" mt="2rem">
            <Button
              display="flex"
              height="45px"
              gridGap="10px"
              m="0 auto"
              width="100%"
              onClick={openModal}
              variant="unstyled"
              background="blue.light"
              color="blue.default"
              padding="0 27px"
            >
              <Icon icon={repoUrl ? 'underlinedPencil' : 'add'} width="25px" height="25px" />
              {repoUrl
                ? finalProjectTranslation?.['edit-final-project'] || t('edit-final-project')
                : finalProjectTranslation?.['add-final-project'] || t('add-final-project')}
            </Button>
            <Box display="flex" flexDirection="column" gridGap="10px" borderColor="white" border="1px solid" padding="10px 22px" borderRadius="4px">
              <Text size="l" fontWeight={700}>
                {progressPercent === 100
                  ? finalProjectTranslation?.completed || t('completed')
                  : finalProjectTranslation?.['complete-required-projects'] || t('complete-required-projects')}
              </Text>
              <Progress
                percents={progressPercent || 0}
                duration={0.4}
                widthSize={218}
                progressColor={progressPercent === 100 ? 'green.400' : ''}
                barHeight="5px"
                borderRadius="20px"
              />
            </Box>
          </Box>
        </Box>
      )}
      <FinalProjectModal
        storyConfig={storyConfig}
        isOpen={isOpen}
        closeModal={closeModal}
        studentsData={students}
        cohortData={cohortSession}
      />
      {openForm && (
        <Modal size="lg" isOpen={openForm} onClose={setOpenForm}>
          <ModalOverlay />
          <ModalContent margin="5rem 0 4rem 0" background={modal.background} borderRadius="13px">
            <ModalCloseButton />
            <FinalProjectForm
              defaultValues={finalProject?.currentProject}
              allProjects={finalProject?.allProjects}
              cohortData={cohortSession}
              studentsData={students}
              refreshFinalProject={refreshFinalProject}
              handleClose={() => setOpenForm(false)}
            />
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

FinalProject.propTypes = {
  studentAndTeachers: PropTypes.arrayOf(PropTypes.any),
  tasks: PropTypes.arrayOf(PropTypes.any),
  storyConfig: PropTypes.objectOf(PropTypes.any),
};

FinalProject.defaultProps = {
  studentAndTeachers: [],
  tasks: [],
  storyConfig: {},
};

export default FinalProject;
