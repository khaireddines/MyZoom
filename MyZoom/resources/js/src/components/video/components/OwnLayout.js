import React from 'react'
import { useSelector } from 'react-redux';

const OwnLayout = () => {
    const { authUser } = useSelector(({ auth }) => auth);
    return (

        <div>
            <div className="ant-card ant-card-bordered" id="mycard" style={{
                height: '-webkit-fill-available',
                width: '-webkit-fill-available'
            }}
            ><div className="ant-card-body">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src={`/assets/images/${authUser.Profile_picture}`} />
                    </span>
                    <div className="overlay-1YJlCn"><div className="size16-1P40sf overlayTitle-8IcS01 idle-U-LIlZ">
                        <span className="overlayTitleText-2mmQzi">{authUser.name}</span></div>
                        <div className="statusContainer-1gtabC"></div></div></div>
            </div>
            <div id="myvideodiv" style={{ display: 'none' }}>
                <video id="myvideo" style={{transform: 'rotateY(180deg)'}} autoPlay playsInline muted></video>
                <div className="overlay-1YJlCn" style={{
                    position: 'relative',
                    left: '0em',
                    bottom: '3em'
                }}><div className="size16-1P40sf overlayTitle-8IcS01 idle-U-LIlZ"><span className="overlayTitleText-2mmQzi">{authUser.name}</span></div><div className="statusContainer-1gtabC"></div></div>
            </div>
        </div>

    )
}
export default OwnLayout;