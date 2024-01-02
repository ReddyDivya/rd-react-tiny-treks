import jsPDF from "jspdf";

const PDFGenerator = () => {
    const generatePDF = () => {
        //create a new instance of jsPDF
        const pdf = new jsPDF();

        //styling
        pdf.setFont('times', 'italic');
        pdf.setFontSize(12);

        //add content to the pdf (string, x, y)
        pdf.text('Hello, this is the 1st page of PDF content!', 10, 10);

        //links(string, x-axis, y-axis, url)
        pdf.textWithLink('Click Me!', 10, 20, {url : 'https://www.google.com'});
        
        //adding shapes
        pdf.setFillColor(0, 255, 255);//red color
        
        //rectangle(x-axis, y-axis, width, height, style(optional)'F'-filled color)
        pdf.rect(10, 30, 25, 25, 'F');
        
        //circle(x-axis, y-axis, radius, style(optional)'F' - filled color)
        pdf.circle(20, 80, 10, 'F');

        pdf.textWithLink('Pomofocus', 10, 100, { url: 'https://pomofocus.io/app' });

        pdf.text('PDF content 1', 10, 110);
        pdf.text('PDF content 2', 10, 120);
        pdf.text('PDF content 3', 10, 130);

        pdf.addPage();//adding another page
        pdf.text('Hello, this is the 2nd page of PDF content!', 10, 10);
        pdf.text('Hello, this is the last PDF content!', 10, 20);

        //save the pdf
        pdf.save('genDoc.pdf');
    };

    return (
    <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">PDF Generator</h2>
        <div className="bg-white p-4 shadown-md">
            {/*Content of the PDF*/}
            <p className="text-lg">This is the content of my PDF.</p>
        </div>
        <div className="mt-4">
            {/*Generate PDF button*/}
            <button onClick={generatePDF} className="bg-blue-500 text-white px-4 py-2 rounded-md">Generate PDF</button>
        </div>
    </div>)
}

export default PDFGenerator;