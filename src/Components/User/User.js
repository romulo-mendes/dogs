import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const h1 = () => {
	return (
		<section className="container">
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="postar" element={<UserPhotoPost />} />
				<Route path="estatisticas" element={<UserStats />} />
			</Routes>
		</section>
	);
};

export default h1;
