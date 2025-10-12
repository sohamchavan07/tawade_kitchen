export default function ContactForm() {
    return (
      <form
        action="https://formspree.io/f/xldporro"
        method="POST"
        className="flex flex-col gap-3 max-w-md mx-auto p-4"
      >
        <label>
          Your Name:
          <input type="text" name="name" required className="border p-2 w-full" />
        </label>
  
        <label>
          Your Email:
          <input type="email" name="email" required className="border p-2 w-full" />
        </label>
  
        <label>
          Message:
          <textarea name="message" required className="border p-2 w-full"></textarea>
        </label>
  
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    );
  }
  