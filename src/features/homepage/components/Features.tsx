export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {["Fast", "Secure", "Scalable"].map((item) => (
          <div key={item} className="bg-primary p-6 shadow rounded-xl text-center">
            <h3 className="text-xl text-black font-semibold">{item}</h3>
            <p className="text-gray-500 mt-4 ">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
