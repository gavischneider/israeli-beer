import { Beer } from "./Beer";

export const BeerGrid = (props: any) => {
  //console.log(props.beers);
  const beers = props.beers;
  const supplier = props.supplier;
  console.log("BEER GRID!!!!!!!!!");
  console.log(beers);

  return (
    <div className="container mx-auto bg-gray-900 mt-5">
      <div className="object-center grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto pb-6 pt-6">
        {beers.map((beer: any, index: number) => {
          //const b = JSON.parse(beer);
          const b = beer;
          return <Beer beer={b} key={b.name + index} supplier={supplier} />;
        })}
      </div>
    </div>
  );
};
