import './Styles.css';

const ScoreBoard = ({score}) => {
	return (
		<div className='info'>
			<div className='player'>Player 1: {score[0]}</div>
			<div className='player'>Player 2: {score[1]}</div>
		</div>
	)
}

export default ScoreBoard;
