import styled from "styled-components";

export const Label = styled.label`
	height: 27px;
	font-style: normal;
	font-weight: 500;
	font-size: ${p => p.theme.fontSizes.d};
	line-height: 26px;
	display: flex;
	align-items: center;
	color: #111111;

	@media (min-width: 768px) {
    	font-size: ${p => p.theme.fontSizes.f};
	}
`
export const Input = styled.div`
	height: 40px;
	width: 240px;
	border-radius: 40px;
	border: 1px solid rgba(245, 146, 86, 0.5);
	background: linear-gradient(0deg, #FDF7F2), linear-gradient(0deg, rgba(245, 146, 86, 0.5), rgba(245, 146, 86, 0.5));

	@media (min-width: 768px) {
		width: 448px;
		height: 48px;
	}
`
export const { ButtonNext, ButtonDone } = styled.button`
	box-sizing: border-box;
	height: 40px;
	width: 240px;
	border-radius: 40px;
	background-color: ${p => p.theme.colors.profile.pencilActive};
	font-size: ${p => p.theme.fontSizes.c};
	line-height: 22px;
	display: flex;
	align-items: center;
	letter-spacing: ${p => p.theme.letterSpacing.b};
	color: ${p => p.theme.colors.profile.cardBg};
	transition: background-color 200ms linear, transform 200ms linear;

	&:hover {
  	cursor: pointer;
	}

	@media (min-width: 768px) {
		width: 180px;
		flex-direction: row;
		justify-content: center;
		padding: 10px 28px;
		gap: 10px;
		font-size: 20px;
	}
`
export const TextModal = styled.p`
	font-weight: 500;
	font-size: ${p => p.theme.fontSizes.c};
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.01em;
	color: #000000;

	@media (min-width: 7668px) {
		font-size: 28px;
		line-height: 24px;
	}

`

export const AddPhoto = styled.img`
	width: 280px;
	height: 280px;
	background: ${p => p.theme.colors.backgroundColor};
	border-radius: 20px;
`
export const InputComment = styled.input`
box-sizing: border-box;
	width: 240px;
	height: 100px;
	border-radius: 20px;
	background: linear-gradient(0deg, #FDF7F2, #FDF7F2),
linear-gradient(0deg, rgba(245, 146, 86, 0.5), rgba(245, 146, 86, 0.5));
border: 1px solid rgba(245, 146, 86, 0.5);
`
export const {ButtonCancel, ButtonBack} = styled.button`
	height: 40px;
	width: 240px;
	background-color: linear-gradient(0deg, #F59256, #F59256), linear-gradient(0deg, #FFFFFF, #FFFFFF);
	border-radius: 40px;
	border: 2px solid ${p => p.theme.colors.profile.pencilActive};
	font-size: ${p => p.theme.fontSizes.c};
	line-height: 22px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;
	color: #111111;
	&:hover {
  	cursor: pointer;
	}

	@media (min-width: 768px) {
		width: 180px;
		flex-direction: row;
		justify-content: center;
		padding: 10px 28px;
		gap: 10px;
		font-size: ${p => p.theme.fontSizes.i};
	}
`