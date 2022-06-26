import SptList from "../components/Spt/SptList";
function spts({ data }) {
  console.log("data", data);
  return (
    <div>
      <SptList sptData={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/spt");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default spts;
