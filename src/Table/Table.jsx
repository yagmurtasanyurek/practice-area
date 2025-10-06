export function Table() {
  return (
    <div className="w-3xl ml-5">
      <table className="border border-white border-separate w-full border-spacing-2 mb-10">
        <thead>
          <tr>
            <th className="border border-white  rounded-xl  bg-cyan-600 p-1 h-20 ">
              Name
            </th>

            <th className="border border-white rounded-xl  bg-cyan-600 p-1 h-20">
              Age
            </th>
            <th className="border border-white rounded-xl  bg-cyan-600 p-1 h-20">
              School
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white rounded-xl  bg-cyan-600 p-1 text-center">
              Yağmur
            </td>

            <td className="border border-white rounded-xl bg-cyan-600 p-1 text-center">
              26
            </td>
            <td className="border border-white rounded-xl  bg-cyan-600 p-1 text-center">
              Istanbul University
            </td>
          </tr>
          <tr>
            <td className="border border-white rounded-xl  bg-cyan-600 p-1 text-center">
              Mark
            </td>

            <td className="border border-white rounded-xl bg-cyan-600 p-1 text-center">
              23
            </td>
            <td className="border border-white rounded-xl  bg-cyan-600 p-1 text-center">
              Istanbul University
            </td>
          </tr>
        </tbody>
      </table>

      {/* Second table */}
      <table className="border border-black p-1 border-dashed text-left w-full mb-10">
        <caption>Vertical Heading</caption>
        <colgroup>
          <col className="bg-fuchsia-700" span={1} />
        </colgroup>
        <tr>
          <th className="border border-black p-1 border-dashed text-left">
            NAME
          </th>
          <td className="border border-black p-1 border-dashed text-left">
            Yağmur
          </td>
          <td className="border border-black p-1 border-dashed text-left">
            Jonas
          </td>
          <td className="border border-black p-1 border-dashed text-left">
            Matt
          </td>
        </tr>
        <tr>
          <th className="border border-black p-1 border-dashed text-left">
            Age
          </th>
          <td className="border border-black p-1 border-dashed ">26</td>
          <td className="border border-black p-1 border-dashed ">32</td>
          <td className="border border-black p-1 border-dashed ">29</td>
        </tr>
      </table>
      {/*  */}
      <table className="border border-black  w-full p-1 mb-10">
        <caption>colSpan</caption>
        <tr>
          <th className="border border-black  p-1" colSpan={2}>
            Name
          </th>
          <th className="border border-black p-1 ">Age</th>
        </tr>
        <tr className="bg-emerald-500">
          <td className="border border-black  p-1">Yağmur </td>
          <td className="border border-black p-1 ">Taşanyürek</td>
          <td className="border border-black  p-1">26</td>
        </tr>
        <tr>
          <td className="border border-black p-1 ">Jonas</td>
          <td className="border border-black  p-1">Schmedtmann</td>
          <td className="border border-black  p-1">32</td>
        </tr>
        <tr className="bg-emerald-500">
          <td className="border border-black p-1 ">Matt</td>
          <td className="border border-black  p-1">Idk</td>
          <td className="border border-black  p-1">29</td>
        </tr>
      </table>
      {/*  */}
      <table className="border border-black w-full p-1 mb-10">
        <caption>rowSpan</caption>
        <tr>
          <th className="border border-black  p-1">Name</th>
          <td className="border border-black  p-1">Yağmur</td>
          <td className="border border-black  p-1">Zeynep</td>
        </tr>
        <tr>
          <th rowSpan={2} className="border border-black  p-1">
            Number
          </th>
          <td className="border border-black  p-1">038494</td>
          <td className="border border-black  p-1">583159</td>
        </tr>
        <tr>
          <td className="border border-black  p-1">949353</td>
          <td className="border border-black  p-1">412847</td>
        </tr>
      </table>
    </div>
  );
}
