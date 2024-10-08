import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import SubscriberService from "../services/subscriber.service.ts";
import WebApp from "@twa-dev/sdk";
import useAppStore from "./useAppStore.ts";
import {CombinedSubscriberData} from "../types/subscriber.type.ts";
import Websocket from "../api/websocket.ts";

const useSubscriberData = () => {
    const [subscriberId, setSubscriberId] = useState<number | null >(null);

    const { data: subscriber, isLoading, isError, error } = useQuery<CombinedSubscriberData>({
            queryKey: ['subscriber', {subscriberId: subscriberId}],
            queryFn: () => {
                if (subscriberId) {
                    return SubscriberService.getSubscriberData(subscriberId);
                }
                throw new Error('No subscriber data available');
            },
            enabled: subscriberId !== 0,
        }
    );

    useEffect(() => {
        if (WebApp.initDataUnsafe.user) {
            Websocket.createConnection(WebApp.initDataUnsafe.user.id)

            setSubscriberId(WebApp.initDataUnsafe.user.id);
            useAppStore.getState().updateUserId(WebApp.initDataUnsafe.user.id)
            WebApp.expand();
            WebApp.setHeaderColor("#000");
            WebApp.setBackgroundColor("#271732");
            WebApp.disableVerticalSwipes()


        } else {
            // For local testing
            console.log(import.meta.env.VITE_REACT_DEFAULT_USER_ID)
            useAppStore.getState().updateUserId(import.meta.env.VITE_REACT_DEFAULT_USER_ID)
            setSubscriberId(Number(import.meta.env.VITE_REACT_DEFAULT_USER_ID))
        }
    }, []);

    if (isLoading) {
        return { subscriber: null, isLoading, isError, error };
    }

    if (isError || !subscriber) {
        throw new Error(error?.message || 'Subscriber data could not be loaded');
    }

    // TypeScript will infer that subscriber is non-null here
    return { subscriber, isLoading: false, isError, error: null };
};

export default useSubscriberData;