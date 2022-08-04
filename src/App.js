import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // Phải viết hoa chữ cái đầu
                        const Page = route.component;
                        // Nếu không có layout => lấy DefaultLayout
                        // Nếu route.layout = null => không lấy layout  mặc định
                        // Lấy một thẻ trống chứa nó
                        let Layout = DefaultLayout;

                        // Nếu có layout => truyền thẳng layout vào
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {' '}
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
