export const useMoney = () => {
  console.log('use money');
}
const useNapkins = () => {
  console.log('use napkins');
}
const usePocketWatch = () => {
  console.log('use usePocketWatch');
};
const useMagicWand = () => {
  console.log('use useMagicWand');
};
const useBackstagePass = () => {
  console.log('useBackstagePass');
};

export const items = {
  money: { name: '50€ Seteli', img: 'money.svg', action: useMoney, cannotAppearIn: [''] },
  napkin: { name: 'Servetit', img: 'napkin.svg', action: useNapkins, cannotAppearIn: [''] },
  pocketWatch: { name: 'Taskukello', img: 'pocketwatch.svg', action: usePocketWatch, cannotAppearIn: [''] },
  magicWand: { name: 'Taikasauva', img: 'magicwand.svg', action: useMagicWand, cannotAppearIn: [''] },
  backstagePass: { name: 'Bäkkäripassi', img: 'backstagepass.svg', action: useBackstagePass, cannotAppearIn: ['start', 'hallway6', 'burgerStand', 'firstAid', 'hallway1']},
};