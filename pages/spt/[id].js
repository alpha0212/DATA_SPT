import EditSpt from "../../components/EditSpt";

function updateSpt({ spt }) {
  console.log("spt", spt);
  return <EditSpt sptUpdateData={spt} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/spt/${params.id}`);
  const spt = await res.json();

  return {
    props: { spt },
  };
}

export default updateSpt;
