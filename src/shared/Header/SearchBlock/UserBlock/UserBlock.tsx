import React from 'react';
import styles from './userblock.less';

import queryString from 'query-string';
import {getUrl} from '../../../../utils/settings/serverSettings';

import Break from '../../../Break';
import Text, {EColor} from '../../../Text';
import {AnonIcon} from '../../../Icons'; 
interface IUserBlockProps {
	avatarSrc?:string;
	username?:string;
	loading?:boolean;
}

export default function UserBlock ({avatarSrc, username, loading}: IUserBlockProps){

    const href = queryString.stringifyUrl({
        url: 'https://www.reddit.com/api/v1/authorize',
        query: {
            "client_id": process.env.CLIENT_ID,
            "response_type": 'code',
            "state": 'random_string',
            "redirect_uri": `${getUrl()}/auth`,
            "duration": 'permanent',
            "scope": 'read submit identity'
        }
    });

	return (
		<a  href={href}
			className={styles.userBox}>
			<div className={styles.avatarBox}>
				{avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
						   : <AnonIcon />
				}
			</div>
			
			<div className={styles.username}>
				<Break size={12} />

				{loading ? (
				<Text size={20} color={EColor.grey99}>
					Загрузка
				</Text>	
				):(
				<Text size={20} color={username? EColor.black: EColor.grey99}>
					{username || 'Аноним'}
				</Text>	
				)}

			</div>
		</a>
	)
}
