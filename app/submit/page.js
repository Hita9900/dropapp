"use client"

import { useState } from "react";

export default function Page() {
  const [ url, setUrl ] = useState("");
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleFetch() {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setTrack(null);
    try {
      const response = await fetch("/api/spotify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "something went wrong");
        return
      }
      setTrack(data);
    } catch {
      setError("network error , check connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-10 space-y-4 max-w-lg">
      <input className="border p-2 w-full rounded"
        type="text"
        placeholder="paste spotify url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="px-4 py-2 rounded bg-green-500 text-white disabled:opacity-50"
        onClick={handleFetch}
        disabled = {loading}
      >
        {loading ? "loading.." : "get track"}
      </button>
      {error && <p className="text-red-400">{error}</p>}
      {track && (
      <div className="border rounded p-4 space-y-2">
        <h2 className="text-xl font-bold">{track.title}</h2>
        <p>Artist : {track.artist}</p>
        <p>Album: {track.album}</p>
        {track.image && (
          <img
            src={track.image}
            alt={track.title}
            width={200}
            className="rounded"
          />
        )}
      </div>
      )}
    </div>
  )
}


// "use client"

// import { useState } from "react";

// export default function Page() {
//   const [ url, setUrl ] = useState("");
//   const [track, setTrack] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function handleFetch() {
//     if (!url.trim()) return;
//     setLoading(true);
//     setError(null);
//     setTrack(null);
//     try {
//       const response = await fetch("/api/spotify", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url })
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || "something went wrong");
//         return
//       }
//       setTrack(data);
//     } catch {
//       setError("network error , check connection.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="m-10 space-y-4 max-w-lg">
//       <input className="border p-2 w-full rounded"
//         type="text"
//         placeholder="paste spotify url"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button
//         className="px-4 py-2 rounded bg-green-500 text-white disabled:opacity-50"
//         onClick={handleFetch}
//         disabled = {loading}
//       >
//         {loading ? "loading.." : "get track"}
//       </button>
//       {error && <p className="text-red-400">{error}</p>}
//       {track && (
//       <div className="border rounded p-4 space-y-2">
//         <h2 className="text-xl font-bold">{track.title}</h2>
//         <p>Artist : {track.artist}</p>
//         <p>Album: {track.album}</p>
//         {track.image && (
//           <img
//             src={track.image}
//             alt={track.title}
//             width={200}
//             className="rounded"
//           />
//         )}
//       </div>
//       )}
//     </div>
//   )
// }









// "use client"

// import { useState } from "react";

// export default function Page() {
//   const [ url, setUrl ] = useState("");
//   const [track, setTrack] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function handleFetch() {
//     if (!url.trim()) return;
//     setLoading(true);
//     setError(null);
//     setTrack(null);
//     try {
//       const response = await fetch("/api/spotify", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url })
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || "something went wrong");
//         return
//       }
//       setTrack(data);
//     } catch {
//       setError("network error , check connection.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="m-10 space-y-4 max-w-lg">
//       <input className="border p-2 w-full rounded"
//         type="text"
//         placeholder="paste spotify url"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button
//         className="px-4 py-2 rounded bg-green-500 text-white disabled:opacity-50"
//         onClick={handleFetch}
//         disabled = {loading}
//       >
//         {loading ? "loading.." : "get track"}
//       </button>
//       {error && <p className="text-red-400">{error}</p>}
//       {track && (
//       <div className="border rounded p-4 space-y-2">
//         <h2 className="text-xl font-bold">track.title</h2>
//         <p>Artist : {track.artist}</p>
//           <p>Album: {track.album}</p>
//         {track.image && (
//           <img
//             src={track.image}
//             alt={track.title}
//             width={200}
//             className="rounded"
//           />
//         )}
//       </div>
//       )
//     </div>
//   )
// }

