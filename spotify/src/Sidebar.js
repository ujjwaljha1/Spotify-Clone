import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    // useDataLayerValue is a custom hook to get the current state and dispatch function from the DataLayer context
    // Destructuring the state to get the playlists array
    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            {/* Display Spotify logo */}
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo"
            />
            {/* Sidebar options with icons for Home, Search, and Your Library */}
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            {/* Title for the playlist section */}
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {/* Map through the playlists array and render a SidebarOption for each playlist */}
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;

/*
Explanation:

1. **Imports**: Necessary modules and components are imported. This includes React, CSS for styling, SidebarOption component, icons from @mui/icons-material, and the useDataLayerValue custom hook.

2. **Function Sidebar**: The Sidebar component is defined. It uses the useDataLayerValue hook to get the current state, specifically the playlists array, from the DataLayer context.

3. **Logo**: An img tag is used to display the Spotify logo at the top of the sidebar.

4. **Sidebar Options**: SidebarOption components are used to create sidebar links with icons for Home, Search, and Your Library. These options are provided with the appropriate icon and title as props.

5. **Playlists Section**: A title for the playlists section is displayed. The playlists array, obtained from the DataLayer context, is mapped to dynamically generate SidebarOption components for each playlist. Each SidebarOption is given the playlist name as the title.

6. **Export**: The Sidebar component is exported as the default export from the module, making it available for use in other parts of the application.
*/
