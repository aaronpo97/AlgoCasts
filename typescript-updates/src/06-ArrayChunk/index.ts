function chunk<ArrayType>(array: ArrayType[], size: number) {
   const chunked: ArrayType[][] = [];

   array.forEach((element, i) => {
      const lastElement = chunked[chunked.length - 1];

      if (!lastElement || lastElement.length === size) {
         chunked.push([element]);
      } else {
         lastElement.push(element);
      }
   });

   return chunked;
}

export default chunk;
