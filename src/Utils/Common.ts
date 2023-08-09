export const getColor = (username: string) => {
    const colors = [
      '#ffa38a',
      '#a9a7e0',
      '#D686D4',
      '#96CE56',
      '#4A90E2',
      '#62b3d0',
      '#ef7676',
    ];
    const firstChar = username.charCodeAt(0);
    const secondChar = username.charCodeAt(1);
    const thirdChar = username.charCodeAt(2);
  
    return colors[(firstChar + secondChar + thirdChar) % 7];
  }