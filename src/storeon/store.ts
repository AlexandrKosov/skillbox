import { createStoreon } from 'storeon';

let comment = (store:any) => {
  store.on('@init', () => ({comment: "Storeon hello"}));
  store.on('change', (comment: any, newText: string) => ({comment: newText}));

};

const sstore = createStoreon([
  comment
]);

export default sstore;