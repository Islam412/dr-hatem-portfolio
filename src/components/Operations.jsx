const operations = [
  { name: 'حقن المفاصل', img: '/joint_injection.jpg' },
  { name: 'خزعة العضلات', img: '/biopsy.jpg' }
];

const Operations = () => (
  <section id="operations" className="py-20 px-6">
    <h2 className="text-4xl font-bold text-center mb-12">العمليات والإجراءات</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {operations.map((op, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={op.img} className="h-64 w-full object-cover" />
          <p className="p-4 text-center font-bold">{op.name}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Operations;