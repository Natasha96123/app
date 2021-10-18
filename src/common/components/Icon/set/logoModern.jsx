import { useColorMode } from '@chakra-ui/react';

const logoModern = ({
  width, height, style,
}) => {
  const { colorMode } = useColorMode();
  return (
    <svg
      style={style}
      width={width || '20px'}
      height={height || '20px'}
      viewBox="0 0 92 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M70.7871 14.7913V12.4612L75.8665 6.50168H80.0486L73.8035 13.6385L70.7871 14.7913Z" fill="#0197D0" />
      <path d="M73.8035 13.6336L80.0486 20.7704H75.8665L70.7871 14.8109V12.4808L73.8035 13.6336Z" fill="#0197D0" />
      <path d="M12.7485 13.1573H15.2724V15.1577C15.2724 15.3433 15.2114 15.5045 15.0919 15.6389C14.9724 15.7732 14.7944 15.8416 14.5652 15.8416H12.7485V20.7777H9.75159V15.8416H1.28997C1.05831 15.8416 0.855916 15.7683 0.680344 15.6242C0.504771 15.4801 0.395038 15.2994 0.348707 15.0869L0 13.3381L9.50286 0.544647H12.7485V13.1573ZM9.75159 6.54325C9.75159 6.24528 9.76134 5.92287 9.78085 5.57849C9.79792 5.23411 9.83206 4.87507 9.87839 4.50138L3.64801 13.1573H9.75159V6.54325Z" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
      <path d="M27.0092 18.0081C27.8504 18.0081 28.5844 17.9323 29.2087 17.7785C29.8329 17.6246 30.4279 17.4121 30.9912 17.1434V13.4627H28.4796C28.2382 13.4627 28.0504 13.3943 27.9114 13.26C27.7724 13.1256 27.7041 12.9596 27.7041 12.7642V10.6393H34.3783V18.819C33.8687 19.1926 33.3395 19.515 32.7909 19.791C32.2397 20.067 31.6521 20.2917 31.0278 20.47C30.4036 20.6483 29.7354 20.7802 29.0234 20.8681C28.3113 20.9561 27.5432 21 26.7214 21C25.2607 21 23.9147 20.7436 22.6857 20.2307C21.4542 19.7178 20.391 19.0046 19.4937 18.0911C18.5963 17.1776 17.8964 16.0883 17.3917 14.8207C16.8869 13.5531 16.6357 12.1682 16.6357 10.6686C16.6357 9.14938 16.8796 7.75475 17.3697 6.48713C17.8599 5.21951 18.5573 4.13019 19.4571 3.21672C20.3593 2.30325 21.4518 1.59495 22.7393 1.09181C24.0244 0.588667 25.4656 0.337097 27.0677 0.337097C28.7039 0.337097 30.1231 0.58134 31.3204 1.07227C32.5177 1.56075 33.5346 2.19823 34.3661 2.9798L33.2834 4.68462C33.0713 5.029 32.7884 5.20241 32.4373 5.20241C32.2154 5.20241 31.9886 5.12914 31.7569 4.97771C31.4594 4.80186 31.1595 4.62356 30.8474 4.44526C30.5377 4.26941 30.1963 4.11553 29.8208 3.98364C29.4452 3.85419 29.0258 3.74673 28.5576 3.66124C28.0894 3.5782 27.5505 3.53668 26.9409 3.53668C25.9508 3.53668 25.0559 3.70521 24.2561 4.03982C23.4562 4.37443 22.7735 4.85559 22.2102 5.48085C21.6469 6.10611 21.2128 6.85594 20.9056 7.73277C20.6008 8.6096 20.4471 9.58657 20.4471 10.6686C20.4471 11.8336 20.6081 12.8716 20.9324 13.7802C21.2567 14.6888 21.7078 15.4557 22.2906 16.081C22.8734 16.7062 23.566 17.1825 24.3707 17.5147C25.1778 17.842 26.0581 18.0081 27.0092 18.0081Z" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
      <path d="M43.5441 6.20871C44.4415 6.20871 45.2657 6.35281 46.0192 6.64102C46.7727 6.92923 47.4214 7.35177 47.9676 7.9062C48.5138 8.46063 48.9381 9.14207 49.2454 9.94807C49.5502 10.7541 49.7038 11.6749 49.7038 12.7105C49.7038 12.9718 49.6916 13.1892 49.6697 13.3601C49.6477 13.5336 49.6038 13.6679 49.5453 13.7656C49.4843 13.8633 49.4039 13.9341 49.3039 13.9756C49.2015 14.0172 49.0722 14.0391 48.9162 14.0391H40.1205C40.2229 15.5119 40.6155 16.5939 41.3007 17.2827C41.9835 17.9739 42.8906 18.3183 44.0196 18.3183C44.5756 18.3183 45.0536 18.2523 45.4559 18.1229C45.8583 17.9934 46.2094 17.8493 46.5094 17.6906C46.8093 17.5318 47.0727 17.3877 47.2994 17.2583C47.5262 17.1288 47.7457 17.0629 47.9578 17.0629C48.0968 17.0629 48.2163 17.0897 48.3187 17.1459C48.4212 17.2021 48.5089 17.2802 48.5821 17.3828L49.5819 18.6407C49.2015 19.0876 48.7772 19.4638 48.3041 19.7666C47.8335 20.0695 47.3409 20.3113 46.8264 20.4945C46.3143 20.6752 45.79 20.8047 45.2584 20.8779C44.7268 20.9512 44.2123 20.9903 43.7124 20.9903C42.7224 20.9903 41.803 20.8242 40.952 20.4945C40.101 20.1647 39.3621 19.6738 38.7329 19.0266C38.1038 18.3793 37.6088 17.5782 37.2479 16.6208C36.887 15.6658 36.7065 14.5594 36.7065 13.3015C36.7065 12.3221 36.8626 11.4013 37.1772 10.5391C37.4917 9.67696 37.9429 8.92713 38.5305 8.28722C39.1182 7.64974 39.8352 7.14416 40.6813 6.77047C41.525 6.39433 42.4809 6.20871 43.5441 6.20871ZM43.6124 8.68289C42.6126 8.68289 41.8323 8.96621 41.269 9.5353C40.7057 10.1044 40.3424 10.9104 40.1863 11.9533H46.624C46.624 11.5063 46.563 11.0838 46.4435 10.6881C46.324 10.2924 46.1387 9.94563 45.8875 9.64521C45.6388 9.34723 45.3242 9.11276 44.9438 8.93934C44.5659 8.76837 44.1221 8.68289 43.6124 8.68289Z" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
      <path d="M58.3737 6.20871C59.2711 6.20871 60.0953 6.35281 60.8512 6.64102C61.6047 6.92923 62.2534 7.35177 62.7996 7.9062C63.3458 8.46063 63.7701 9.14207 64.0774 9.94807C64.3822 10.7541 64.5358 11.6749 64.5358 12.7105C64.5358 12.9718 64.5236 13.1892 64.5017 13.3601C64.4797 13.5336 64.4358 13.6679 64.3773 13.7656C64.3163 13.8633 64.2359 13.9341 64.1359 13.9756C64.0335 14.0172 63.9042 14.0391 63.7482 14.0391H54.9525C55.0549 15.5119 55.4475 16.5939 56.1327 17.2827C56.8155 17.9739 57.7226 18.3183 58.8517 18.3183C59.4076 18.3183 59.8856 18.2523 60.2879 18.1229C60.6903 17.9934 61.0414 17.8493 61.3414 17.6906C61.6413 17.5318 61.9047 17.3877 62.1314 17.2583C62.3582 17.1288 62.5777 17.0629 62.7898 17.0629C62.9288 17.0629 63.0483 17.0897 63.1507 17.1459C63.2532 17.2021 63.3409 17.2802 63.4141 17.3828L64.4139 18.6407C64.0335 19.0876 63.6092 19.4638 63.1361 19.7666C62.6655 20.0695 62.1729 20.3113 61.6584 20.4945C61.1463 20.6752 60.622 20.8047 60.0904 20.8779C59.5588 20.9512 59.0443 20.9903 58.5444 20.9903C57.5544 20.9903 56.635 20.8242 55.784 20.4945C54.933 20.1647 54.1941 19.6738 53.565 19.0266C52.9358 18.3793 52.4408 17.5782 52.0799 16.6208C51.719 15.6658 51.5386 14.5594 51.5386 13.3015C51.5386 12.3221 51.6946 11.4013 52.0092 10.5391C52.3238 9.67696 52.7749 8.92713 53.3626 8.28722C53.9503 7.64974 54.6672 7.14416 55.5133 6.77047C56.3546 6.39433 57.3105 6.20871 58.3737 6.20871ZM58.4444 8.68289C57.4446 8.68289 56.6643 8.96621 56.101 9.5353C55.5377 10.1044 55.1744 10.9104 55.0183 11.9533H61.456C61.456 11.5063 61.395 11.0838 61.2755 10.6881C61.156 10.2924 60.9707 9.94563 60.7195 9.64521C60.4708 9.34723 60.1563 9.11276 59.7758 8.93934C59.3954 8.76837 58.9516 8.68289 58.4444 8.68289Z" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
      <path d="M70.7874 14.2052V20.7753H67.3613V0H70.7874V11.8971" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
      <path d="M91.068 9.22746C90.9754 9.37645 90.8778 9.48148 90.7779 9.54254C90.6754 9.6036 90.5462 9.63291 90.3901 9.63291C90.2243 9.63291 90.0463 9.5865 89.8561 9.49369C89.6659 9.40088 89.4464 9.29585 89.1977 9.17862C88.949 9.06138 88.6637 8.95635 88.3442 8.86354C88.0248 8.77073 87.6493 8.72432 87.2128 8.72432C86.5373 8.72432 86.0057 8.86843 85.618 9.15663C85.2303 9.44484 85.0352 9.82342 85.0352 10.2899C85.0352 10.5977 85.1352 10.8566 85.3351 11.0666C85.5327 11.2767 85.796 11.4598 86.1252 11.6186C86.452 11.7774 86.8251 11.919 87.242 12.046C87.659 12.173 88.0833 12.3098 88.5198 12.4588C88.9539 12.6078 89.3806 12.7788 89.7976 12.9693C90.2146 13.1598 90.5852 13.4016 90.9144 13.6971C91.2436 13.9902 91.507 14.3419 91.7045 14.7522C91.9045 15.1626 92.0044 15.6559 92.0044 16.2348C92.0044 16.9236 91.8801 17.561 91.6289 18.1423C91.3802 18.7261 91.0144 19.2292 90.534 19.6518C90.0536 20.0767 89.4586 20.4065 88.7515 20.6434C88.0443 20.8803 87.2323 21 86.3179 21C85.8277 21 85.3498 20.956 84.8816 20.8681C84.4134 20.7802 83.9647 20.6556 83.5355 20.4968C83.1063 20.3381 82.7064 20.1524 82.3431 19.9375C81.9773 19.7226 81.6554 19.4906 81.3799 19.239L82.17 17.925C82.2724 17.7662 82.3919 17.6441 82.5309 17.561C82.6699 17.478 82.8454 17.434 83.0576 17.434C83.2697 17.434 83.4721 17.4951 83.6623 17.6148C83.8525 17.7369 84.072 17.8663 84.3207 18.0056C84.5694 18.1448 84.8645 18.2767 85.201 18.3963C85.5375 18.5185 85.9667 18.5771 86.4837 18.5771C86.8909 18.5771 87.2396 18.5282 87.5322 18.4305C87.8224 18.3328 88.0638 18.2034 88.254 18.0471C88.4442 17.8883 88.5832 17.7051 88.671 17.4951C88.7588 17.285 88.8027 17.0677 88.8027 16.8454C88.8027 16.5108 88.7027 16.2348 88.5052 16.0199C88.3052 15.8049 88.0419 15.6193 87.7151 15.4605C87.3859 15.3018 87.0128 15.1601 86.591 15.0331C86.1691 14.9086 85.7399 14.7693 85.301 14.6203C84.8621 14.4714 84.4329 14.2955 84.011 14.0952C83.5892 13.8949 83.2161 13.6409 82.8869 13.3332C82.5601 13.0254 82.2943 12.6493 82.0968 12.1999C81.8968 11.7529 81.7993 11.2132 81.7993 10.5781C81.7993 9.99194 81.9139 9.43263 82.1456 8.90018C82.3772 8.36773 82.7162 7.90611 83.1649 7.50799C83.6135 7.10988 84.172 6.7948 84.8426 6.55789C85.5131 6.32097 86.2861 6.20129 87.1664 6.20129C88.1467 6.20129 89.0392 6.36494 89.8439 6.68978C90.6486 7.01707 91.3192 7.44449 91.8557 7.97694L91.068 9.22746Z" fill={colorMode === 'light' ? '#020203' : '#FFFFFF'} />
    </svg>

  );
};

export default logoModern;
