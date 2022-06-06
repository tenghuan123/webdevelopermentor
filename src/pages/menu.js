import React from 'react'

const MenuBox = ({ children }) => {
    return (
        <div style={{
            width: '490px',
            boxShadow: '0px 0px 5px #ccc',
            borderRadius: '10px'
        }}>
            {children}
        </div>
    )
}

const MenuHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 28px'
}

const MenuHeader = ({ children }) => {
    return (
        <div style={MenuHeaderStyle}>{children}</div>
    )
}

const MenuFooter = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'end',
            padding: '15px 28px',
        }}>{children}</div>
    )
}

const MenuItem = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            padding: '20px',
            alignItems: 'center'
        }}>{children}</div>
    )
}

const MenuItemPointerStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'blue',
}

const MenuItemPointer = ({ children }) => {
    return (
        <div style={MenuItemPointerStyle}></div>
    )
}

const defaultPStyle = {
    margin: '0',
}

const MenuItemTitle = ({ children }) => {
    return (
        <p style={{
            ...defaultPStyle,
            fontSize: '16px'
        }}>{children}</p>
    )
}

const MenuItemDesc = ({ children }) => {
    return (
        <p style={{
            ...defaultPStyle,
            marginTop: '20px',
            color:'#999',
            fontSize: '14px'
        }}>{children}</p>
    )
}

const MenuItemPhoto = ({ children }) => {
    return (
        <img />
    )
}

const MenuBody = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

const ChecksIcons = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 12l5 5l10 -10" />
            <path d="M2 12l5 5m5 -5l5 -5" />
        </svg>
    )
}

const Divider = () => {
    return (
        <hr  style={{
            margin:"0px 28px",
            background: '#eee'
        }} />
    )
}

const Menu = () => {
    return (
        <MenuBox style={{
            maxWidth: '432px',
        }} >
            <MenuHeader style={{ justifyContent: 'space-between' }}>
                <span>Notifications</span>

                <div style={{ display: 'flex', alignItems: 'center', color: '#0072fa' }}>
                    <ChecksIcons width="24" height="24" fillColor="currentColor" style={{marginRight: '12px'}}  />
                    <p style={{
                        ...defaultPStyle
                    }}>Mark as read</p>
                </div>
            </MenuHeader>
            <MenuBody>
                <MenuItem>
                    <MenuItemPointer />
                    <div style={{
                        marginLeft:'20px'
                    }}>
                        <MenuItemTitle>There is a new updated version of our sofware availabel</MenuItemTitle>
                        <MenuItemDesc>Sep 14, 2021 at 10:11 AM</MenuItemDesc>
                    </div>
                    <MenuItemPhoto />
                </MenuItem>
                <MenuItem>
                    <MenuItemPointer />
                    <div style={{
                        marginLeft:'20px'
                    }}>
                        <MenuItemTitle>There is a new updated version of our sofware availabel</MenuItemTitle>
                        <MenuItemDesc>Sep 14, 2021 at 10:11 AM</MenuItemDesc>
                    </div>
                    {/* <MenuItemPhoto /> */}
                </MenuItem>
            </MenuBody>
            <Divider />
            <MenuFooter>
                <p
                    style={{
                        ...defaultPStyle,
                        color: '#0072fa'
                    }}>
                    View all notifications
                </p>
            </MenuFooter>
        </MenuBox>
    )
}


export default Menu