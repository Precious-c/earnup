
import { Share2, Copy, Users } from "lucide-react"


interface FrenStats {
  invited: number
  verified: number
  earned: number
}

interface Fren {
  id: string
  username: string
  avatar: string
  frens: number
  points: number
  isVerified: boolean
}

const FriendsPage = () => {
  const stats: FrenStats = {
    invited: 4,
    verified: 3,
    earned: 0,
  }

  const frens: Fren[] = [
    {
      id: "1",
      username: "dorendev",
      avatar: "",
      frens: 0,
      points: 0,
      isVerified: true,
    },
    {
      id: "2",
      username: "ryder",
      avatar: "",
      frens: 2,
      points: 22,
      isVerified: true,
    },

    {
      id: "3",
      username: "stanWeb3",
      avatar: "",
      frens: 21,
      points: 2200,
      isVerified: true,
    },

    {
      id: "4",
      username: "steve duckins",
      avatar: "",
      frens: 9,
      points: 11200,
      isVerified: false,
    },
  ]

  const handleShareInvite = () => {
    // Implement share functionality
    console.log("Share invite link")
  }

  const handleCopyInvite = () => {
    navigator.clipboard.writeText("https://kolo.app/invite/123")
    // Show toast or feedback
  }

  return (
    <div className="min-h-screen text-white w-full pt-10">
  
      <main className="pb-20 font-poppins">
        {/* Invite Section */}
        <div className="rounded-xl p-6 px-5 mb-6 border-stroke border">
          <h2 className="text-[17px] leading-5 mb-4 text-center font-medium ">Invite frens and get:</h2>

          <div className="flex mb-5 gap-1 justify-between">
            <div className="text-center">
              <h4 className="text-2xl leading-7 tracking-wider text-center font-bold mb-1 ">25%</h4>
              <div className="text-[sm] font-medium tracking-wide text-[#7a7d83]">from frens farming</div>
            </div>
            <div className="text-center">
              <div className="text-2xl leading-7 tracking-wider text-center font-bold mb-1 ">15%</div>
              <div className="text-sm font-medium tracking-wide text-[#7a7d83]">from their frens farming</div>
            </div>
            <div className="text-center">
              <div className="text-2xl leading-7 tracking-wider text-center font-bold mb-1 flex justify-center items-center"><p>10</p> <svg viewBox="0 0 14 14" className="svg-icon svg-fill icon__up" style={{width: "15px", height: "15px"}}><path  d="M0 7.63 5.616 0h8.371L7.629 6.146h2.65l-8.796 7.258 3.18-5.775H0Z" fill="#fff"></path></svg> </div>
              <div className="text-sm font-medium tracking-wide text-[#7a7d83]">Energy for each fren</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleShareInvite}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-background rounded-xl py-3 hover:bg-secondary transition-colors font-[550]"
            >
              <Share2 className="w-4 h-4" />
              Share invite link
            </button>
            <button
              onClick={handleCopyInvite}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2C2C2E] rounded-xl py-3 hover:bg-[#3C3C3E] transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copy invite link
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border border-stroke rounded-xl p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold mb-1">{stats.invited}</div>
              <div className="text-xs text-gray-400">frens invited</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold mb-1">{stats.verified}</div>
              <div className="text-xs text-gray-400">frens verified</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold mb-1">{stats.earned}</div>
              <div className="text-xs text-gray-400">earned from frens</div>
            </div>
          </div>
        </div>

        {/* Friends List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6 border-b border-stroke-secondary">
            <div>
              <h2 className="text-[18px]  tracking-[-.24px] font-medium">{stats.verified} verified frens</h2>
              <div className="flex items-center gap-2 mb-4">
                <p className=" font-medium">1000</p>
                <svg viewBox="0 0 14 14" className="svg-icon svg-fill icon__up stroke-[#14d65a]" style={{width: "14px", height: "14px", stroke: "#14d65a"}}><mask id="svgiconid_kolo-logo-color_a_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="8" y="3" width="5" height="8"><path  d="M8.62 8.622v1.4a4.653 4.653 0 0 0 3.893-2.055 5.623 5.623 0 0 0 .082-.962 5.578 5.578 0 0 0-1.59-3.909 3.241 3.241 0 0 1 .907 2.26c0 .872-.34 1.692-.957 2.31a3.245 3.245 0 0 1-2.31.956H8.62Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_a_2_mPDBa)"><mask id="svgiconid_kolo-logo-color_b_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="8" y="2" width="5" height="9"><path  d="M12.742 2.95H8.476v7.218h4.266V2.95Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_b_2_mPDBa)"><path  fill="url(#svgiconid_kolo-logo-color_c_2_mPDBa)" d="M8.47 2.943h4.284v7.238H8.47z"></path></g></g><mask id="svgiconid_kolo-logo-color_d_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="7"><path  d="M.008 6.64H1.41a5.558 5.558 0 0 1 1.629-3.6 5.573 5.573 0 0 1 2.998-1.558A4.646 4.646 0 0 1 9.754.816c.786.19 1.532.588 2.152 1.192A6.968 6.968 0 0 0 9.829.596 7.002 7.002 0 0 0 .008 6.639Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_d_2_mPDBa)"><mask id="svgiconid_kolo-logo-color_e_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="-1" y="-1" width="14" height="8"><path  d="M12.053-.146H-.137v6.931h12.19v-6.93Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_e_2_mPDBa)"><path  fill="url(#svgiconid_kolo-logo-color_f_2_mPDBa)" d="M-.15-.156h12.208v6.944H-.15z"></path></g></g><path  d="M.115 8.264a7 7 0 1 0 11.877-6.171l-.042-.043-.043-.042A4.639 4.639 0 0 0 9.755.816a4.679 4.679 0 0 0-3.717.666 4.645 4.645 0 0 0-.688.568 4.667 4.667 0 0 0 3.275 7.967v-1.4A3.24 3.24 0 0 1 6.34 7.66a3.245 3.245 0 0 1-.957-2.31c0-.872.34-1.693.957-2.31a3.246 3.246 0 0 1 2.31-.956 3.24 3.24 0 0 1 2.36 1.007 5.578 5.578 0 0 1 1.578 4.299 5.652 5.652 0 0 1-.193 1.12 5.568 5.568 0 0 1-1.435 2.45A5.563 5.563 0 0 1 7 12.6a5.565 5.565 0 0 1-3.96-1.64 5.56 5.56 0 0 1-1.629-4.32H.01a7.03 7.03 0 0 0 .106 1.624Z" fill="currentColor"></path><defs><linearGradient id="svgiconid_kolo-logo-color_c_2_mPDBa" x1="12.681" y1="3.557" x2="8.882" y2="9.434" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity="0"></stop><stop offset="1" stop-color="currentColor"></stop></linearGradient><linearGradient id="svgiconid_kolo-logo-color_f_2_mPDBa" x1="10.9" y1="1.493" x2=".978" y2="4.414" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity="0"></stop><stop offset="1" stop-color="currentColor"></stop></linearGradient></defs></svg>
              </div>
            </div>
            
            <div className="text-sm  rounded-2xl border px-2 py-1">{stats.verified}/5</div>
          </div>

          

          {frens.map((fren) => (
            <div key={fren.id} className="flex items-center justify-between  rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4b607c] flex items-center justify-center border">
                  {fren.avatar || fren.username[0].toUpperCase()}
                </div>
                <div>
                  <div className="font-medium">{fren.username}</div>
                  <div className="text-sm text-gray-400 flex gap-1 items-center"><Users size={15}/>{fren.frens}</div>
                </div>
              </div>
              <div className="text-[#4CD964] flex items-center gap-1">
                <svg viewBox="0 0 14 14" className="svg-icon svg-fill icon__up stroke-[#14d65a]" style={{width: "14px", height: "14px", stroke: "#14d65a"}}><mask id="svgiconid_kolo-logo-color_a_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="8" y="3" width="5" height="8"><path  d="M8.62 8.622v1.4a4.653 4.653 0 0 0 3.893-2.055 5.623 5.623 0 0 0 .082-.962 5.578 5.578 0 0 0-1.59-3.909 3.241 3.241 0 0 1 .907 2.26c0 .872-.34 1.692-.957 2.31a3.245 3.245 0 0 1-2.31.956H8.62Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_a_2_mPDBa)"><mask id="svgiconid_kolo-logo-color_b_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="8" y="2" width="5" height="9"><path  d="M12.742 2.95H8.476v7.218h4.266V2.95Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_b_2_mPDBa)"><path  fill="url(#svgiconid_kolo-logo-color_c_2_mPDBa)" d="M8.47 2.943h4.284v7.238H8.47z"></path></g></g><mask id="svgiconid_kolo-logo-color_d_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="7"><path  d="M.008 6.64H1.41a5.558 5.558 0 0 1 1.629-3.6 5.573 5.573 0 0 1 2.998-1.558A4.646 4.646 0 0 1 9.754.816c.786.19 1.532.588 2.152 1.192A6.968 6.968 0 0 0 9.829.596 7.002 7.002 0 0 0 .008 6.639Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_d_2_mPDBa)"><mask id="svgiconid_kolo-logo-color_e_2_mPDBa" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="-1" y="-1" width="14" height="8"><path  d="M12.053-.146H-.137v6.931h12.19v-6.93Z" fill="#fff"></path></mask><g mask="url(#svgiconid_kolo-logo-color_e_2_mPDBa)"><path  fill="url(#svgiconid_kolo-logo-color_f_2_mPDBa)" d="M-.15-.156h12.208v6.944H-.15z"></path></g></g><path  d="M.115 8.264a7 7 0 1 0 11.877-6.171l-.042-.043-.043-.042A4.639 4.639 0 0 0 9.755.816a4.679 4.679 0 0 0-3.717.666 4.645 4.645 0 0 0-.688.568 4.667 4.667 0 0 0 3.275 7.967v-1.4A3.24 3.24 0 0 1 6.34 7.66a3.245 3.245 0 0 1-.957-2.31c0-.872.34-1.693.957-2.31a3.246 3.246 0 0 1 2.31-.956 3.24 3.24 0 0 1 2.36 1.007 5.578 5.578 0 0 1 1.578 4.299 5.652 5.652 0 0 1-.193 1.12 5.568 5.568 0 0 1-1.435 2.45A5.563 5.563 0 0 1 7 12.6a5.565 5.565 0 0 1-3.96-1.64 5.56 5.56 0 0 1-1.629-4.32H.01a7.03 7.03 0 0 0 .106 1.624Z" fill="currentColor"></path><defs><linearGradient id="svgiconid_kolo-logo-color_c_2_mPDBa" x1="12.681" y1="3.557" x2="8.882" y2="9.434" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity="0"></stop><stop offset="1" stop-color="currentColor"></stop></linearGradient><linearGradient id="svgiconid_kolo-logo-color_f_2_mPDBa" x1="10.9" y1="1.493" x2=".978" y2="4.414" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity="0"></stop><stop offset="1" stop-color="currentColor"></stop></linearGradient></defs></svg>
                <p className="mt-[2px]">{fren.points}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* <BottomNavbar /> */}
    </div>
  )
}

export default FriendsPage

