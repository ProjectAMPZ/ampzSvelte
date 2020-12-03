import { writable } from 'svelte/store';
import { get, post, put } from "./../lib/api";
import Cookie from 'cookie-universal'
const cookies = Cookie()
function authenticate() {
    const { subscribe, set } = writable({});
    return {
        subscribe,
        me: async () => {
            try {
                let user = await get("users/me", null, cookies.get('token'));
                user.token = cookies.get('token')
                set(user)
                // cookies.set('Authorization', data.token, { path: '/', maxAge: tokenExpiry })
                return user
            } catch (e) {
                set({})
                throw e
            }
        },
        login: async ({ phone, password }) => {
            try {
                let data = await post("auth/local", { phone, password });
                set(data)
                cookies.set('token', data.token)
                // cookies.set('Authorization', data.token, { path: '/', maxAge: tokenExpiry })
                return data
            } catch (e) {
                cookies.remove('token')
                set({})
                throw e
            }
        },
        
        verification: async (credentials) => {
            // console.log(credentials);
            // return;
            try {
                const data = await post('/api/signup/verification', credentials);
                
                set(data)
                cookies.set('token', data.token)
                return data;
            } catch (e) {
                set({})
                throw e
            }
        },


        signup: async (credentials) => {
            console.log(credentials);
            return;
            try {
                const data = await post('/api/signup', credentials);
                // {
                //     "gender": "Unspecified",
                //     "following": [],
                //     "sportInterests": [],
                //     "education": [],
                //     "skills": [],
                //     "likedPosts": [],
                //     "bookmarks": [],
                //     "careerApplied": [],
                //     "eventAttended": [],
                //     "LocationBookmarked": [],
                //     "_id": "5de6ae9df81f8d6d7637c4bc",
                //     "username": "gus1",
                //     "fullName": "Ayo Alfonso",
                //     "email": "gogod69554@one-mail.top",
                //     "phoneNumber": "+2348278405669",
                //     "country": "Nigeria",
                //     "role": "5b6712025078132ea9f49b81",
                //     "age": 12,
                //     "profile_picture": "https://d1w2poirtb3as9.cloudfront.net/default.jpeg",
                //     "code": 2359,
                //     "__v": 0
                //   }
                set(data)
                // cookies.set('token', data.token)
                return data;
            } catch (e) {
                set({})
                throw e
            }
        },
        logout: async () => {
            try {
                cookies.remove('token')
                set({});
                return response;
            } catch (e) {
                set({})
                throw e
            }
        },
        forgotPassword: async (payload) => {
            try {
                return await post('/users/forgot', payload)
            } catch (e) {
                throw e
            }
        },
        async changePassword(payload) {
            try {
                const data = await put('/users/password', payload)
                return data
            } catch (e) {
                throw e
            }
        },
        async resetPassword(payload) {
            try {
                const data = await post('/users/reset/' + payload.id, payload)
                if (data) {
                    console.log('info', data, { root: true })
                    // router.push('/')
                }
                return data
            } catch (e) {
                throw e
            }
        },
        async updateProfile({ firstName, lastName, state, city, zip, avatar, gender, dob, language, address }) {
            try {
                const data = await put('/users/profile', { firstName, lastName, state, city, zip, avatar, gender, dob, language, address })
                set(data)
                return data;
            } catch (e) {
                throw e
            }
        },
    }
}
export const auth = authenticate()