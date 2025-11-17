import { Card, CardContent } from "@/components/atoms/card";
import { leadership, developers } from "@/data/team";

const Team = () => (
  <section id="tim" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Tim Pengembang</h2>
        {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bertemu dengan tim ahli yang berdedikasi mengembangkan masa depan pendidikan STEM
        </p> */}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Tim Kepemimpinan</h3>
          <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br ${member.gradientColors} p-1`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    {member.badge && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className={`bg-gradient-to-r ${member.badgeColors} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {member.badge}
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className={`${member.roleColor} font-medium mb-3`}>{member.role}</p>
                  {/* <p className="text-gray-600 text-sm leading-relaxed mb-4"> */}
                    {/* {member.description} */}
                  {/* </p> */}
                  {/* {member.socialLinks && (
                    <div className="flex justify-center space-x-3">
                      {member.socialLinks.map((social, socialIndex) => {
                        const Icon = social.icon;
                        const getIconColor = (platform: string) => {
                          switch (platform) {
                            case 'linkedin': return 'bg-blue-100 hover:bg-blue-200 text-blue-600';
                            case 'github': return 'bg-gray-100 hover:bg-gray-200 text-gray-600';
                            case 'email': return 'bg-red-100 hover:bg-red-200 text-red-600';
                            default: return 'bg-gray-100 hover:bg-gray-200 text-gray-600';
                          }
                        };
                        
                        return (
                          <div key={socialIndex} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${getIconColor(social.platform)}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Tim Pengembangan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {developers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br ${member.gradientColors} p-1`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className={`${member.roleColor} font-medium mb-2 text-sm`}>{member.role}</p>
                  {/* <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {member.description}
                  </p> */}
                  {/* {member.socialLinks && (
                    <div className="flex justify-center space-x-2">
                      {member.socialLinks.map((social, socialIndex) => {
                        const Icon = social.icon;
                        const getIconColor = (platform: string) => {
                          switch (platform) {
                            case 'linkedin': return 'bg-blue-100 hover:bg-blue-200 text-blue-600';
                            case 'github': return 'bg-gray-100 hover:bg-gray-200 text-gray-600';
                            default: return 'bg-gray-100 hover:bg-gray-200 text-gray-600';
                          }
                        };
                        
                        return (
                          <div key={socialIndex} className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer ${getIconColor(social.platform)}`}>
                            <Icon className="w-3 h-3" />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Team */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Tim Penasihat</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisors.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br ${member.gradientColors} p-1 flex-shrink-0`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                      <p className={`${member.roleColor} font-medium mb-2 text-sm`}>{member.role}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Team;
