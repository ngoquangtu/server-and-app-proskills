export const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
};

export function convertTimestamp(time) {
    try{
      const date = new Date(time);
  
      const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      };
      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    
      return formattedDate;
    }
    catch (error){
      return;
    }
  }