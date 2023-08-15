import { ArrowDropDown, InfoOutlined, ViewList } from '@mui/icons-material';
import Button from './components/common/Button';
import Aside from './layouts/Aside';
import Nav from './layouts/Nav';
import FolderButton from './components/FolderButton';
import FileButton from './components/FileButton';

function App() {
    return (
        <section className="flex h-screen w-screen flex-row bg-blue-50/50 font-inter">
            <Aside />
            <section className="w-full md:ml-64">
                <Nav />
                <main className="w-full rounded-2xl bg-white text-gray-700">
                    <div className="mt-5 flex items-start justify-between">
                        <div className="flex cursor-pointer items-center rounded-full px-2 py-1 text-3xl transition-all hover:bg-gray-200 hover:text-gray-950 md:ml-2 md:px-3">
                            My Files
                            <ArrowDropDown className="ml-1 h-16 w-16" />
                        </div>
                        <div className="mr-1 flex items-center md:mr-4">
                            <Button rounded="full">
                                <ViewList className="h-10 w-10" />
                            </Button>
                            <Button rounded="full">
                                <InfoOutlined className="h-10 w-10" />
                            </Button>
                        </div>
                    </div>
                    <div className="ml-1 mt-3 inline-flex gap-4 md:ml-5">
                        <Button className="border-2 border-gray-500">
                            Type
                            <ArrowDropDown className="ml-1 h-16 w-16" />
                        </Button>
                        <Button className="border-2 border-gray-500">
                            People
                            <ArrowDropDown className="ml-1 h-16 w-16" />
                        </Button>
                        <Button className="border-2 border-gray-500">
                            Modified
                            <ArrowDropDown className="ml-1 h-16 w-16" />
                        </Button>
                    </div>

                    <div className="h-[calc(100vh-11.4rem)] overflow-y-auto">
                        <div className="mt-8 px-2 md:px-4">
                            <h5 className="mb-2 font-medium">Folders</h5>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <FolderButton title="My Folder" />
                                <FolderButton title="My Folder" />
                                <FolderButton title="My Folder" />
                                <FolderButton title="My Folder adfdf fadsfsd adf" />
                                <FolderButton title="My Folder" />
                            </div>
                        </div>
                        <div className="mt-8 px-2 md:px-4">
                            <h5 className="mb-2 font-medium">Files</h5>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <FileButton
                                    title="Important Document"
                                    type="pdf"
                                />
                                <FileButton
                                    title="Important Document"
                                    type="pdf"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </section>
    );
}

export default App;
