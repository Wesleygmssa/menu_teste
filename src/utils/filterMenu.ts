

export const FilterMenu = (MenuList: any, search: string): any => {
    const lowerBusca = search.toLowerCase();
    return MenuList.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
}


  // const filterStart = (value: any) => {
  //  const result = Menu[0].list.filter(item => item.id === value.id);
  //  if(result.length > 0){
  //   setActive(!active);
  //  }
  // };


