import styled from "styled-components";
//input comments width="394px" 768px

export const ModalOverlay = styled.div`
    position: 'fixed';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.theme.colors.profile.logOutText};
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
    background-color: ${p => p.theme.colors.profile.cardBg};
    overflow: scroll;
`
export const TitleModal = styled.h3`
	font-weight: 500;
  	font-size: ${p => p.theme.fontSizes.f};
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

export const IconClose = styled.button`
	border: none;
  	width: 34px;
  	height: 34px;
  	background-color: ${p => p.theme.colors.profile.bgTrash};
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
			background-color: ${p => p.theme.colors.profile.logOutIcon};
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