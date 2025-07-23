export const Contact = () => {
  return (
    <div>
      <h2 className="p-2 m-2 text-3xl text-center">This is contact page</h2>
      <form action="">
        <input type="text" placeholder="Name"  className="border-2 border-b-black m-2 p-2"/>
        <input type="text" placeholder="Leave a message"  className="border-2 border-b-black m-2 p-2"/>
        <button className="m-2 p-2 rounded-2xl border-2 border-black text-center">Submit your message!</button>
      </form>
    </div>
  );
};
