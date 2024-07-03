import React from "react";
import Card from "../component/card.jsx";

const CardsGrid = () => {

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mx-5 mb-5">
        <div className="col">
            <Card title="First Title Card" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
        </div>
        <div className="col">
            <Card title="Second Title Card" description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </div>
        <div className="col">
            <Card  title="Other Title Card" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure" />
        </div>
        <div className="col">
            <Card title="Last Title Card" description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero" />
        </div>
    </div>
  );
}

export default CardsGrid;