import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserAsync } from './userSlice';

const UserProfile = () => {
	const dispatch = useDispatch();
	const me = useSelector(selectUser);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchUserAsync(id));
	});

	return (
		<div>
			<h2>Welcome {me.username}</h2>
            <Link to="/profile/update">
            <button type="button" className="update-profile">
              Update profile
            </button>
          </Link>
		</div>
	);
};

export default UserProfile;
