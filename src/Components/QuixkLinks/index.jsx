function QuickLinks() {
  const quicklinks = [
    {
      id: 1,
      categoryname: "Dancing Groupss",
      advertisementsAmount: 1022,
      popular: {
        first: "Eastern Groups",
        second: "Western Groups",
        third: "Wes Groups",
        fourth: "Hip Hop Teams",
      },
    },
    {
      id: 2,
      categoryname: "Wedding Suits",
      advertisementsAmount: 1054,
      popular: {
        first: "Western Suits",
        second: "Estern Suits",
        third: "South Suits",
        fourth: "Inidan Suits",
      },
    },
    {
      id: 3,
      categoryname: "Music Groups",
      advertisementsAmount: 1063,
      popular: {
        first: "Western",
        second: "Eastern",
        third: "Jayamangala Songs",
        fourth: "Traditional",
      },
    },
  ];
  return (
    <div className="flex flex-row justify-center p-3 mt-5 mx-auto w-11/12 overflow-x-scroll xl:overflow-x-hidden scroll whitespace-normal scroll-smooth">
      {quicklinks.map((item) => (
        <div
          key={item.id}
          className="w-fit h-fit lg:h-36 rounded-md bg-quatery p-3 mr-5 ml-5 mt-2 "
        >
          <h4 className="font-Lato font-semibold w-60">
            {item.advertisementsAmount} profiles in{" "}
            {item.categoryname.length <= 15
              ? item.categoryname
              : `${item.categoryname.slice(0, 14)}...`}
          </h4>
          <p className="`max-w-xs font-Lato text-secondaryText leading-normal tracking-wide mt-3 w-60 overflow-y-auto`">
            <a href="/timeline">{item.popular.first}</a> |{" "}
            <a href="/timeline">{item.popular.second}</a> |{" "}
            <a href="/timeline">{item.popular.third} </a> |{" "}
            <a href="/timeline">{item.popular.fourth}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuickLinks;
