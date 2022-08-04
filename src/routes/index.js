// Routes : chứa tất cả các route
// Thêm vào bằng cách map qua
import Home from '~/Pages/Home';
import Discover from '~/Pages/Discover';
import Following from '~/Pages/Following';
import MyVideo from '~/Pages/MyVideo';
import WatchLater from '~/Pages/WatchLater';
import Watched from '~/Pages/Watched';
import Shorts from '~/Pages/Shorts';
import Library from '~/Pages/Library';
import Sports from '~/Pages/Sports';
import VideoLikes from '~/Pages/VideoLikes';
import Game from '~/Pages/Game';
import routesConfig from '~/config/routes';
import Setting from '~/Pages/Setting';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.discover, component: Discover },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.myVideo, component: MyVideo, layout: null },
    { path: routesConfig.watchLater, component: WatchLater },
    { path: routesConfig.watched, component: Watched, layout: null },
    { path: routesConfig.shorts, component: Shorts },
    { path: routesConfig.library, component: Library },
    { path: routesConfig.videolikes, component: VideoLikes },
    { path: routesConfig.sports, component: Sports },
    { path: routesConfig.game, component: Game },
    { path: routesConfig.setting, component: Setting, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
