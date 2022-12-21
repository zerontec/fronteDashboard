import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";

import "./home.scss";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />

          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className='charts'>
          <Featured />
          <Chart title='Ultimos 6 meses ' aspect={2 / 1} />


        </div>

        {/* list Container */}
        <div className='listContainer'>
          <div className='listTitle'>Ultimas Operaciones</div>

          <Table />


        </div>

      </div>
    </div>
  );
};

export default Home;
