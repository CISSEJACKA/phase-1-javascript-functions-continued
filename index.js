function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Test the functions
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(saturdayFun("hike")); // Output: This Saturday, I want to hike!
  
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // Output: This Monday, I will work from home.
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction()); // Output: You are *special*!
  console.log(encouragingPromptFunction("awesome")); // Output: You are !!!awesome!!!!
