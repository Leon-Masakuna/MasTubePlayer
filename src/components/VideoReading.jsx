import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import '../styles/videoReading_style.css'
import Card from './Card'
import moment from 'moment/moment'
import numeral from 'numeral'

const VideoReading = () => {
   //States
   const [relatedVideos, setRelatedVideos] = useState([])
   const [videoInfo, setVideoInfo] = useState([])
   const { videoId, channelId } = useParams()
   const [videoChannelInfos, setVideoChannelInfos] = useState([])

   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=${videoId}&type=video&key=${key}`

   const fecthVideoById = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&key=${key}`

   const fetchChannelByVideo = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&maxResults=50&key=${key}`

   //Behavior
   const accessToken = localStorage.getItem('token')
   const navigate = useNavigate()

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => setRelatedVideos(data?.items))
   }, [accessToken, videoId])

   //UseEffect for videos ID
   useEffect(() => {
      fetch(fecthVideoById, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((result) => result.json())
         .then((data) => setVideoInfo(data?.items))
   }, [accessToken, videoId])

   //UseEffect for channel by video
   useEffect(() => {
      fetch(fetchChannelByVideo, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((result) => result.json())
         .then((data) => setVideoChannelInfos(data?.items))
   }, [accessToken, videoId])

   console.log('related videos : ', relatedVideos)
   console.log('video infos : ', videoInfo)
   console.log('Channels infos : ', videoChannelInfos)
   console.log('channel id : ', channelId)

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])
   return (
      <div>
         <div className="reading__page">
            <div className="video__lecture">
               <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
               ></iframe>
               <div>
                  <div>
                     {videoInfo?.map((item, id) => (
                        <div key={id}>
                           <p className="video__title">
                              {item?.snippet?.title}
                           </p>

                           <div className="video__infos">
                              <div className="comment__infos">
                                 {numeral(item?.statistics?.viewCount).format(
                                    'O.a'
                                 )}{' '}
                                 views
                              </div>
                              <div className="comment__infos">
                                 <i className="fa-solid fa-thumbs-up"></i>{' '}
                                 {numeral(item?.statistics?.likeCount).format(
                                    'O.a'
                                 )}
                              </div>
                              <div className="comment__infos">
                                 Comments :{' '}
                                 {numeral(
                                    item?.statistics?.commentCount
                                 ).format('O.a')}
                              </div>
                              <div className="comment__infos">
                                 Published :{' '}
                                 {moment(item?.snippet?.publishedAt).fromNow()}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div>
                     {videoChannelInfos.map((item, id) => {
                        const channelId = item.id
                        return (
                           <Link
                              to={`/chanelVideosPage/${channelId}`}
                              className="channel__link"
                              key={id}
                           >
                              <div className="channel__info__container">
                                 <div className="channel__image">
                                    <img
                                       className="image__channel"
                                       src={
                                          item.snippet.thumbnails['medium'][
                                             'url'
                                          ]
                                       }
                                       alt=""
                                    />
                                 </div>
                                 <p className="channel__text">
                                    {item.snippet.title}
                                 </p>
                              </div>
                           </Link>
                        )
                     })}
                  </div>
               </div>
            </div>
            <div className="related__videos">
               {relatedVideos?.map((item, id) => (
                  <Link
                     className="video__link__style"
                     to={`/videoplay/${item.id.videoId}/${item?.snippet?.channelId}`}
                     key={id}
                  >
                     <Card key={id} video={item} />
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default VideoReading
