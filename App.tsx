import { LoadAssets } from '@providers/LoadAssets';
import { Provider } from '@providers/StateProvider';
import { Application } from './src/Application';

const App: React.FC = () => {
    return (
        <LoadAssets>
            <Provider>
                <Application />
            </Provider>
        </LoadAssets>
    );
};

export default App;
