function RequestCard({ request }) {
  return (
    <div>
      <hr className="border mb-10" />

      <div className="flex gap-8 items-center">
        {/* Image */}
        <div className="w-36 aspect-[4/3] rounded-lg">
          <img
            className="aspect-[4/3] rounded-lg object-cover"
            src="https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lightGrayText text-2xl">Pending</h3>
          <div>
            <p>From Pongsatorn xdd</p>
            <p>19 Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
