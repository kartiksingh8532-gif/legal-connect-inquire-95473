
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Resources = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Resources</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Legal drafts, important links, and court information for your reference
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Section - Sample Drafts */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">SAMPLE DRAFTS FOR REFERENCE</h2>
              
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Access expertly crafted legal drafts ready for your needs. From contracts to wills, our library offers everything in one place. Each document is 100% editable and designed with simplicity in mind.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-2 border-black">
                  <h3 className="text-xl font-semibold mb-4 text-black">Hindi Legal Draft</h3>
                  <Button
                    onClick={() => handleDownload("https://www.virtuouslawpartners.com/_files/archives/efe785_a4a17d3981374eb3b8658329c55754e0.zip?dn=HINDI%20LEGAL%20DRAFT%201.zip", "Hindi_Legal_Draft.zip")}
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 flex items-center space-x-2 mx-auto"
                  >
                    <Download className="w-5 h-5" />
                    <span>One Click Download</span>
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-2 border-black">
                  <h3 className="text-xl font-semibold mb-4 text-black">English Legal Draft</h3>
                  <Button
                    onClick={() => handleDownload("https://www.virtuouslawpartners.com/_files/archives/efe785_b09be06e90df460ab4e1ca69fcee13aa.zip?dn=English%20legal%20draft%201.zip", "English_Legal_Draft.zip")}
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 flex items-center space-x-2 mx-auto"
                  >
                    <Download className="w-5 h-5" />
                    <span>One Click Download</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Section - Important Links & Cause List */}
            <div className="space-y-12">
              {/* Important Links */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-black">Important Links</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-lg font-semibold mb-4 text-black">Delhi</h3>
                    <Button
                      onClick={() => window.open("https://ecourts.gov.in/ecourts_home/index.php?p=dist_court/delhi", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-lg font-semibold mb-4 text-black">G.B. Nagar</h3>
                    <Button
                      onClick={() => window.open("https://gbnagar.dcourts.gov.in/case-status-search-by-case-number/", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-lg font-semibold mb-4 text-black">Ghaziabad</h3>
                    <Button
                      onClick={() => window.open("https://ghaziabad.dcourts.gov.in/case-status-search-by-case-number/", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-lg font-semibold mb-4 text-black">Consumer Court</h3>
                    <Button
                      onClick={() => window.open("https://cms.nic.in/ncdrcusersWeb/login.do?method=caseStatus", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Cause List */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-black">Cause List</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-xl font-semibold mb-4 text-black">Delhi High Court</h3>
                    <Button
                      onClick={() => window.open("https://delhihighcourt.nic.in/reports/cause_list/current", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Cause List</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-2 border-black">
                    <h3 className="text-xl font-semibold mb-4 text-black">UPRERA</h3>
                    <Button
                      onClick={() => window.open("https://up-rera.in/cause", "_blank")}
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 flex items-center space-x-2 mx-auto"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Cause List</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Resources;
