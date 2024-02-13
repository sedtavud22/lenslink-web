import FooterDescription from "./FooterDescription";
import FooterForm from "./FooterForm";
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <>
      <hr />
      <footer className="max-w-[1440px] mx-auto">
        <div className="flex justify-between px-24 py-12">
          <FooterDescription />
          <FooterMenu title="Links">
            <p>Home</p>
            <p>About</p>
            <p>Booking</p>
            <p>Blog</p>
          </FooterMenu>
          <FooterMenu title="Help">
            <p>Contact</p>
            <p>Lorem Ipsum</p>
            <p>Privacy Policies</p>
          </FooterMenu>
          <FooterForm
            header="Subscribe"
            text="Subscribe to get latest property, blog news from us"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
