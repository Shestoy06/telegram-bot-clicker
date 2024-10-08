import UpgradeTapLevel from "./upgradeItems/UpgradeTapLevel.tsx";
import UpgradeMaxEnergyLevel from "./upgradeItems/UpgradeMaxEnergyLevel.tsx";
import AnimatedLayout from "../../../ui/animation/AnimatedLayout.tsx";
import {useOutletContext} from "react-router-dom";
import {CombinedSubscriberData} from "../../../types/subscriber.type.ts";
import UpgradeAutoBotLevel from "./upgradeItems/UpgradeAutoBotLevel.tsx";
import Boost from "./Boost.tsx";
const Upgrade = () => {

    const subscriber = useOutletContext<CombinedSubscriberData>();

    return (
        <AnimatedLayout>
            <div className="flex flex-col">
                <div className="text-3xl pb-4 text-center">
                    <div className="inline-block relative">
                        Upgrade
                        <span className="absolute ml-2"> 🚀</span>
                    </div>
                </div>
                <div className="text-xs text-center font-futuraRegular">
                    <span className="text-xs">Here you can upgrade the power of your finger!</span>
                </div>
                <Boost/>
                <div className="space-y-4 mt-4 pb-4">
                    <UpgradeTapLevel
                        upgradeInfo={subscriber.currentLevel}
                        subscriberId={subscriber.user_id}/>

                    <UpgradeMaxEnergyLevel
                        upgradeInfo={subscriber.currentMaxEnergyLevel}
                        subscriberId={subscriber.user_id}/>

                    <UpgradeAutoBotLevel
                        upgradeInfo={subscriber.currentAutoBotLevel}
                        subscriberId={subscriber.user_id}
                    />
                </div>
            </div>
        </AnimatedLayout>
    );
};

export default Upgrade;