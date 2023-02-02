import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: 'fixed';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(17, 17, 17, 0.6);
    overflow: 'hidden';
`
export const ModalContent = styled.div`
	padding: 0 20px;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    width: 280px;
    max-height: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    overflow: scroll;
`
export const TitleModal = styled.h3`
	font-weight: 500;
  	font-size: 24px;
  	line-height: 33px;
  	color: #111111;
  	margin-top: 40px;
  	text-align: center;

  	@media (min-width: 768px) {
		font-weight: 600;
    	font-size: 36px;
    	line-height: 49px;
	}
`
export const Label = styled.label`
	height: 27px;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	display: flex;
	align-items: center;
	color: #111111;

	@media (min-width: 768px) {
    	font-size: 24px;
	}
`
export const Field = styled.Field`
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
	background-color: rgba(245, 146, 86, 1);
	font-size: 16px;
	line-height: 22px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;
	color: #FFFFFF;
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
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.01em;
	color: #000000;

	@media (min-width: 7668px) {
		font-size: 28px;
		line-height: 24px;
	}

`
export const IconClose = styled.button`
	border: none;
  	width: 34px;
  	height: 34px;
  	background-color: #FDF7F2;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	border-radius: 50%;
  	position: absolute;
  	top: 20px;
  	right: 20px;
  	cursor: pointer;
  	transition: background-color 200ms linear, transform 200ms linear;
  		&:hover, :focus {
			background-color: #F59256;
		}

  	@media (min-width: 768px) {
		width: 44px;
		height: 44px;
	}
`
export const Icon = styled.img`
	width: 15.56px;
  	height: 15.6px;
	&:hover, :focus img {
			transform: scale(0.9)
		}

  	@media (min-width: 768px) {
    width: 20px;
  	height: 20px;
	}
`
export const AddPhoto = styled.img`
width: 280px;
height: 280px;
background: rgba(253, 247, 242, 1);
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
	border: 2px solid rgba(245, 146, 86, 1);
	font-size: 16px;
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
		font-size: 20px;
	}
`