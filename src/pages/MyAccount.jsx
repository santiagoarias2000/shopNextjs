import React from 'react';
import style from '@styles/MyAccount.module.scss';

const MyAccount = () => {
	return (
		<div className={style.MyAccount}>
			<div className={style['MyAccount-container']}>
				<h1 className={style.title}>My account</h1>
				<form action="/" className={style.form}>
					<div>
						<label for="name" className={style.label}>Name</label>
						<p className={style.value}>Camila Yokoo</p>
						<label for="email" className={style.label}>Email</label>
						<p className={style.value}>camilayokoo@gmail.com</p>
						<label for="password" className={style.label}>Password</label>
						<p className={style.value}>*********</p>
					</div>
					<input type="submit" value="Edit" className={`${style['secondary-button']} ${style['login-button']}`} />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
