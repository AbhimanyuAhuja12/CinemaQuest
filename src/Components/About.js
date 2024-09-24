import React, { useState, useEffect } from 'react';

const About = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'dummy',
    location: 'dummy',
    avatar_url: '',
    url: 'https://github.com/AbhimanyuAhuja12', // Set your GitHub profile URL here
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.github.com/users/abhimanyuahuja12');
      const json = await data.json();
      setUserInfo((prevState) => ({
        ...prevState,
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      }));
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once after the component mounts

  const { name, location, avatar_url, url } = userInfo;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 m-4 text-center">
      <img src={avatar_url} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <h2 className="text-lg text-gray-600">{location}</h2>
      
      <div className="mt-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          <h3 className="text-gray-700">Github: {url}</h3>
        </a>
        <h4 className="text-gray-700">Contact: abhimanyuahuja12@gmail.com</h4>
      </div>
    </div>
  );
};

export default About;
