import React, { useEffect, useState } from 'react';
import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import useSpotify from 'hooks/useSpotify';

const Sidebar: React.FC = () => {
  const spotifyApi = useSpotify();

  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [playlistId, setPlaylistId] = useState<null | string>(null);

  useEffect(() => {
    if (!spotifyApi.getAccessToken()) {
      return;
    }

    spotifyApi.getUserPlaylists().then((response) => {
      setPlaylists(response.body.items);
    });
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 p-5 text-sm border-gray-900 overflow-y-scroll h-screen scrollbar-hide ">
      <div className="space-y-4">
        <button onClick={() => signOut()} className="flex items-center space-x-2 hover:text-white">
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        {playlists.map((playlist) => (
          <p onClick={() => setPlaylistId(playlist.id)} key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
