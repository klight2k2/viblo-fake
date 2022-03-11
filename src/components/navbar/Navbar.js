import './navbar.css';

export default function Navbar() {
	return (
		<div className='navbarWrapper'>
			<div className='banner'>
				<img
					src='assets/banner/1.png'
					alt=''
					className='navbarBanner'
				/>
			</div>
			<div className='navbarContainer'>
				<ul className='navbarList'>
					<li className='navbarItem'>
						<a href='/' className='navbarLink '>
							MỚI NHẤT
						</a>
						<div className='line navbarActive'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							SERIES
						</a>
						<div className='line'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							EDITORS' CHOICE
						</a>
						<div className='line'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							TRENDING
						</a>
						<div className='line '></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							VIDEOS
						</a>
						<div className='line'></div>
					</li>
				</ul>
			</div>
			<div className='navbarJoin'>
				<a
					href='https://facebook.com/groups/viblo.community.official'
					className='navbarJoinLink'
				>
					Tham gia Facebook group "Viblo Community" để cùng
					nhau học tập và kết nối
				</a>
			</div>
			<div></div>
		</div>
	);
}
