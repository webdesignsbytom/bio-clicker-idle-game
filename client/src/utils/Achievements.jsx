export const listenForClicks = (playerCurrentAchievements, playerCharacter) => {
    // find all incompleted click achievements
    const clickAchievementsArray = playerCurrentAchievements.filter(e => e.type === 'clicks' && e.completed === false);

    // Use the 0 index of array and goal result for value checked
    const currentValue = clickAchievementsArray[0].goal
    if (playerCharacter.totalTimesClicked === currentValue) {

      // find ache in array that has matching score
      const foundAchievement = playerCurrentAchievements.find((e) => e.goal === currentValue);

      if (foundAchievement.completed) {
        return;
      }
      // set item to completed
      foundAchievement.completed = true;
    }
};

