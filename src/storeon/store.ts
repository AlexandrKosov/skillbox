import { createStoreon } from 'storeon';

let comment = (store:any) => {
  store.on('@init', () => ({comment: "Storeon hello"}));
  store.on('change', (comment: any) => {
    return {comment}
  });
//   store.on('addNote', ({ notes }: any, note: any) => {
//     return {
//       notes: [...notes, { id: 0, item: note }],
//     };
//   });
//   store.on('deleteNote', ({ notes }: any, id: any) => ({
//     notes: notes.filter((note: { id: any; }) => note.id !== id),
//   }));
};

const sstore = createStoreon([
  comment
]);

export default sstore;