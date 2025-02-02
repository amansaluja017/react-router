import React from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";
import axios from "axios";

function Github() {
    const data = useLoaderData();
    return (
            <div className="grid justify-center">
                <img src="https://avatars.githubusercontent.com/u/152149811?v=4" alt="avatar" />
                Github: {data.login}
                <br />
                <Link to={data.html_url}>Github link: {data.html_url}</Link>
                <br />
                <div>Total github repository: {data.public_repos}</div>

            </div>
    )
}

export default Github;

export const GithubLoader = async() => {
    const response = await axios.get("https://api.github.com/users/amansaluja017");
    return response.data;
}
 
