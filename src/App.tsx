import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  BookOpen, 
  X,
  Check,
  Upload,
  Trash2,
  ArrowLeft,
  Globe,
  Info,
  PlayCircle,
  Rocket,
  Lightbulb,
  FileText,
  MonitorPlay,
  Share2,
  Home,
  Calendar,
  Zap,
  FileSpreadsheet,
  Wand2,
  Sparkles,
  Clock,
  MessageSquare
} from 'lucide-react';

const APP_CATEGORIES = [
  {
    id: 'ho-so-giang-day',
    title: '📝 HỒ SƠ GIẢNG DẠY',
    apps: [
      {
        id: 1,
        name: 'Lên Kế Hoạch Dạy Học Tự Động',
        desc: 'Tính năng tạo kế hoạch cho giáo viên tiểu học lên PPCT tự động nhanh chóng. Bạn chỉ cần tải Thời khoá biểu, Phân phối chương trình và mẫu Kế hoạch cá nhân lên là phần mềm tự động tạo kế hoạch.',
        icon: BookOpen,
        iconBg: 'bg-emerald-500',
        views: 0,
        hot: true,
        free: false,
        price: 'Từ 20K',
        guideLink: '#',
        loginLink: 'https://kehoachdayhoctudong.vercel.app/',
        guideDetails: {
          title: "Hướng dẫn Lên Kế Hoạch Dạy Học Tự Động",
          subtitle: "Công cụ hỗ trợ giáo viên tiểu học lên PPCT tức thì",
          videoLink: "#",
          overview: "Ứng dụng chuyên biệt giúp giáo viên tiểu học tối ưu hóa công việc lập Kế hoạch Giảng dạy và Phân phối Chương trình (PPCT). Không cần thao tác thủ công, hệ thống sẽ tự động tổng hợp lịch dạy và phân bổ chương trình ngay trên mẫu của bạn chưa đầy 2 phút.",
          features: [
            { id: 1, title: "Đồng bộ TKB", desc: "Hỗ trợ đọc và xử lý thông minh Thời khóa biểu giảng dạy của cá nhân.", icon: Calendar, color: "text-blue-500" },
            { id: 2, title: "Ghép nối PPCT", desc: "Tự động phân bổ tiết dạy dựa trên Phân phối chương trình do giáo viên cung cấp.", icon: FileSpreadsheet, color: "text-orange-500" },
            { id: 3, title: "Tự động hóa 100%", desc: "Xuất ngay Kế hoạch giảng dạy hoàn chỉnh chuẩn format form mẫu của trường.", icon: Zap, color: "text-emerald-500" }
          ],
          steps: [
            { step: 1, title: "Tải lên TKB", desc: "Đưa file Thời khoá biểu được phân công của bạn lên hệ thống." },
            { step: 2, title: "Cung cấp PPCT & Mẫu", desc: "Tải lên file Phân phối chương trình môn học và file Mẫu Kế hoạch cá nhân." },
            { step: 3, title: "Nhận kết quả", desc: "Phần mềm tự động điền và tạo ra Kế hoạch hoàn chỉnh (Word) cho bạn tải về." }
          ]
        }
      },
      {
        id: 2,
        name: 'Nhận xét Điểm & Học Bạ',
        desc: 'Công cụ tự động hóa việc ghi nhận xét học sinh vào sổ sách và học bạ. Tiết kiệm thời gian, công sức và đảm bảo chính xác.',
        icon: MonitorPlay,
        iconBg: 'bg-blue-600',
        views: 0,
        hot: true,
        free: false,
        price: '100K',
        guideLink: '#',
        loginLink: 'https://drive.google.com/file/d/1D2hQUTVZfFfa9s8A-uYZisNid5eLtzY7/view?usp=sharing',
        isExternalLink: true,
        actionText: 'TẢI ỨNG DỤNG',
        guideDetails: {
          title: "Giới thiệu Phần mềm nhận xét điểm thường xuyên & Học Bạ",
          subtitle: "CÀI ĐẶT THÀNH CÔNG!",
          videoLink: "#",
          overview: "Công cụ tự động hóa việc ghi nhận xét học sinh vào sổ sách và học bạ dành cho giáo viên Tiểu học và THCS. Phần mềm giúp tiết kiệm thời gian, công sức và đảm bảo tính chính xác, khoa học. Lưu ý quan trọng: Phần mềm yêu cầu kết nối Internet để kiểm tra bản quyền.\n\nTác giả: Hoàng Văn Đình Khoa\nĐịa chỉ: Xã Hàm Yên, tỉnh Tuyên Quang.\nZalo hỗ trợ: 0978.468.986 - Điện thoại: 0989.982.818",
          features: [
            { id: 1, title: "Tự Động Hóa", desc: "Chạy tự động các nhận xét, điểm dựa trên file Excel tải lên.", icon: Zap, color: "text-blue-500" },
            { id: 2, title: "Ba Chế Độ", desc: "Hỗ trợ 3 chế độ nhận xét tùy chọn: Môn học, Năng lực, Học bạ.", icon: Check, color: "text-emerald-500" },
            { id: 3, title: "Thống Kê Nhanh", desc: "Có sẵn tính năng thống kê số liệu siêu nhanh cho mục đích báo cáo.", icon: FileText, color: "text-orange-500" }
          ],
          steps: [
            { step: 1, title: "Khởi động và Đăng nhập", desc: "Nhấn vào biểu tượng ngoài Desktop. Đăng nhập hoặc Đăng ký tài khoản (miễn phí)." },
            { step: 2, title: "Cấu hình", desc: "Tải file Excel danh sách lớp lên. Và chọn chế độ nhận xét phù hợp." },
            { step: 3, title: "Chạy phần mềm", desc: "Nhấn \"Chạy tự động\" và hưởng thụ kết quả." }
          ]
        }
      },
      {
        id: 4,
        name: 'Sửa Thời Gian Taskbar',
        desc: 'Công cụ sửa thời gian ảnh chụp màn hình Taskbar siêu tốc. Tiện lợi cho giáo viên khi cần làm minh chứng báo cáo.',
        icon: Clock,
        iconBg: 'bg-indigo-500',
        views: 0,
        hot: true,
        free: false,
        price: 'Nạp Điểm',
        guideLink: '#',
        loginLink: 'https://sua-anh-thoigian-taskbar.vercel.app/',
        guideDetails: {
          title: "Giới thiệu Sửa Thời Gian Taskbar",
          subtitle: "Công cụ tạo ảnh minh chứng tiện lợi, chân thực",
          videoLink: "#",
          overview: "Ứng dụng giúp bạn thay đổi thời gian trên bức ảnh chụp màn hình (chứa thanh Taskbar của Windows) một cách hoàn toàn tự động. Vô cùng hiệu quả khi bạn cần chỉnh lý minh chứng hình ảnh làm báo cáo, hồ sơ, kế hoạch.",
          features: [
            { id: 1, title: "Nhanh Gọn", desc: "Tải ảnh và chỉnh sửa trực tiếp trên trình duyệt.", icon: Zap, color: "text-blue-500" },
            { id: 2, title: "Tùy Biến", desc: "Đổi giờ, AM/PM, thứ ngày tháng năm chính xác.", icon: Calendar, color: "text-emerald-500" },
            { id: 3, title: "Tự Nhiên", desc: "Ảnh xuất ra giữ nguyên độ nét, font chữ gốc chuẩn.", icon: Check, color: "text-orange-500" }
          ],
          steps: [
            { step: 1, title: "Tải ảnh", desc: "Chọn bức ảnh chụp toàn màn hình có chứa Taskbar." },
            { step: 2, title: "Sửa thời gian", desc: "Thiết lập lại thời gian, ngày tháng năm muốn hiển thị." },
            { step: 3, title: "Download", desc: "Nhấn nút Tải Về ngay sau khi xem trước (1 điểm = 1 lần xuất)." }
          ]
        }
      },
      {
        id: 5,
        name: 'Tiện Ích Tự Động Điền Nhận Xét',
        desc: 'Trợ thủ đắc lực giúp giáo viên tự động điền nhận xét học sinh hàng loạt trên CSDL và vnEdu. Tiết kiệm 90% thời gian.',
        icon: MessageSquare,
        iconBg: 'bg-rose-500',
        views: 0,
        hot: true,
        free: false,
        price: 'Có Phí',
        guideLink: '#',
        loginLink: 'https://drive.google.com/file/d/12jGrWhhKfKwoO2ghhkFc3VnfNKHV3rBu/view?usp=sharing',
        isExternalLink: true,
        actionText: 'TẢI TIỆN ÍCH',
        guideDetails: {
          title: "TIỆN ÍCH TỰ ĐỘNG ĐIỀN NHẬN XÉT HỌC SINH",
          subtitle: "\"TRỢ THỦ\" ĐẮC LỰC CHO GIÁO VIÊN!",
          videoLink: "#",
          overview: "Thầy cô đang mệt mỏi vì phải gõ từng dòng nhận xét trên CSDL hay vnEdu vào mỗi dịp giữa kỳ, cuối kỳ? Hãy để tiện ích của chúng tôi giúp thầy cô tiết kiệm 90% thời gian!\n\nCài đặt một lần, dùng lâu dài. Trải nghiệm ngay để kỳ đánh giá học sinh không còn là nỗi ám ảnh!",
          features: [
            { id: 1, title: "Tự động điền hàng loạt", desc: "Chỉ 1 click, nhận xét tự động điền theo đúng mức điểm/mức đạt được của từng học sinh.", icon: Zap, color: "text-blue-500" },
            { id: 2, title: "Hỗ trợ đa nền tảng", desc: "Hoạt động mượt mà trên CSDL (Hà Nội, MOET) và vnEdu.", icon: Globe, color: "text-emerald-500" },
            { id: 3, title: "Bao trọn các loại đánh giá", desc: "Hỗ trợ từ điểm môn học đến đánh giá Năng lực - Phẩm chất (NLPC) và Sổ học bạ.", icon: Check, color: "text-orange-500" },
            { id: 4, title: "Thư viện cá nhân hóa", desc: "Thầy cô tự do chỉnh sửa, thêm bớt kho nhận xét đa dạng của riêng mình.", icon: FileText, color: "text-fuchsia-500" }
          ],
          steps: [
            { step: 1, title: "Cài đặt & Đăng nhập", desc: "Cài đặt tiện ích vào trình duyệt và đăng nhập." },
            { step: 2, title: "Cấu hình đánh giá", desc: "Thầy cô có thể chủ động sửa lại kho nhận xét theo ý mình." },
            { step: 3, title: "Tự động điền", desc: "Vào CSDL/vnEdu, bấm 1 click và để tiện ích tự động điền nhận xét." }
          ]
        }
      }
    ]
  },
  {
    id: 'hoat-dong-vui-nhon',
    title: '✨ HOẠT ĐỘNG LỚP HỌC',
    apps: [
      {
        id: 3,
        name: 'Ước Mơ Tương Lai',
        desc: 'Công cụ AI biến ảnh chân dung học sinh thành nghề nghiệp tương lai trong nháy mắt. Thu hút trí tò mò, tạo ra những tiết học vui nhộn đầy ắp tiếng cười.',
        icon: Wand2,
        iconBg: 'bg-fuchsia-600',
        views: 0,
        hot: true,
        free: false,
        price: '50K',
        guideLink: '#',
        loginLink: 'https://uocmotuonglai.vercel.app/',
        guideDetails: {
          title: "Giới thiệu Ước Mơ Tương Lai AI",
          subtitle: "Công cụ tạo niềm vui và định hướng nghề nghiệp",
          videoLink: "#",
          overview: "Chỉ cần đưa ảnh của học sinh vào và ấn chọn ngành nghề tương lai là hệ thống đưa ra kết quả. Các em sẽ rất thích thú và tò mò, tạo ra những tiết học sinh hoạt hoặc hướng nghiệp vô cùng vui nhộn, đầy tiếng cười.",
          features: [
            { id: 1, title: "Siêu Đơn Giản", desc: "Upload hình ảnh và mọi thứ tự động chạy.", icon: Sparkles, color: "text-blue-500" },
            { id: 2, title: "Kết Qủa Bất Ngờ", desc: "AI ghép mặt học sinh vào trang phục các ngành nghề cực đẹp.", icon: Rocket, color: "text-emerald-500" },
            { id: 3, title: "Tiết Học Vui Nhộn", desc: "Giúp học sinh hào hứng và định hướng mục tiêu học tập.", icon: Lightbulb, color: "text-orange-500" }
          ],
          steps: [
            { step: 1, title: "Tải ảnh lên", desc: "Giáo viên tải ảnh chân dung học sinh lên ứng dụng." },
            { step: 2, title: "Thiết lập", desc: "Nhập hoặc chọn ngành nghề ước mơ của em học sinh đó." },
            { step: 3, title: "Lan tỏa niềm vui", desc: "Mở trên màn hình lớn để cả lớp cùng xem và chia sẻ kết quả ảo diệu." }
          ]
        }
      }
    ]
  }
];

const THEMES = [
  { id: 'bg-education-pattern', name: 'Họa tiết giáo dục', className: 'bg-education-pattern' },
  { id: 'solid-gray', name: 'Xám tối giản', className: 'bg-slate-50' },
  { id: 'gradient-blue', name: 'Gradient Xanh Dương', className: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50' },
  { id: 'gradient-pink', name: 'Gradient Hồng Cam', className: 'bg-gradient-to-br from-rose-50 via-white to-orange-50' },
  { id: 'grid-pattern', name: 'Lưới Caro', className: 'bg-slate-50 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem]' },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'bg-education-pattern';
  });
  const [customBg, setCustomBg] = useState(() => {
    return localStorage.getItem('app-custom-bg') || '';
  });
  
  // Track dynamically real views inside local storage
  const [appViews, setAppViews] = useState<Record<number, number>>(() => {
    const stored = localStorage.getItem('app-views-count-v2');
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with default views from categories
    const initialConfig: Record<number, number> = {};
    APP_CATEGORIES.forEach(cat => cat.apps.forEach(app => {
      initialConfig[app.id] = app.views;
    }));
    return initialConfig;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [activeGuideApp, setActiveGuideApp] = useState<any>(null);
  const [activeIframeApp, setActiveIframeApp] = useState<{name: string, url: string, id: number} | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const handleAppClick = (appId: number) => {
    setAppViews(prev => {
      const updatedViews = { ...prev, [appId]: (prev[appId] || 0) + 1 };
      localStorage.setItem('app-views-count-v2', JSON.stringify(updatedViews));
      return updatedViews;
    });
  };

  const openIframeApp = (app: any) => {
    handleAppClick(app.id);
    if (app.isExternalLink) {
      window.open(app.loginLink, '_blank');
    } else {
      setIsIframeLoading(true);
      setActiveIframeApp({ name: app.name, url: app.loginLink, id: app.id });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCustomBg(base64String);
        setTheme('custom-bg');
        try {
          localStorage.setItem('app-custom-bg', base64String);
        } catch (err) {
          console.error("Dung lượng ảnh quá lớn để lưu vào cache trình duyệt", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeCustomBg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomBg('');
    setTheme('bg-education-pattern');
    localStorage.removeItem('app-custom-bg');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const currentThemeClass = THEMES.find(t => t.id === theme)?.className || 'bg-education-pattern';
  
  const backgroundStyle = theme === 'custom-bg' && customBg ? {
    backgroundImage: `url(${customBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  } : {};

  return (
    <div 
      className={`h-screen w-full flex flex-col font-sans text-slate-900 selection:bg-blue-200 overflow-hidden transition-colors duration-500 ${theme === 'custom-bg' ? '' : currentThemeClass}`}
      style={backgroundStyle}
    >
      
      {/* Fixed Top Container (No scroll) */}
      <div className="flex-none w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        {/* 1. Navbar */}
        <nav className="border-b border-slate-200 px-4 sm:px-8 py-2 flex items-center justify-between gap-4">
          {/* Left: Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 active:scale-95 shrink-0 pl-1">
             <div className="flex flex-col items-center leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
               <span className="text-[26px] font-black text-[#006cb7] tracking-tight drop-shadow-sm mb-0.5">Giáo dục</span>
               <span className="text-[22px] font-black text-[#006cb7] tracking-tight drop-shadow-sm lowercase">đổi mới</span>
             </div>
             
             {/* Logo SVG */}
             <div className="relative transform hover:rotate-2 hover:scale-105 duration-300" style={{ width: '60px', height: '60px' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                   <defs>
                     <linearGradient id="starGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" stopColor="#fbbf24"/>
                       <stop offset="100%" stopColor="#84cc16"/>
                     </linearGradient>
                   </defs>
                   
                   {/* Stack Base / Closed Book */}
                   <path d="M50 55 L15 67 L50 79 L85 67 Z" fill="#22c55e" />
                   <path d="M15 67 L50 79 L50 93 L15 81 Z" fill="#16a34a" />
                   <path d="M85 67 L50 79 L50 93 L85 81 Z" fill="#15803d" />
                   
                   {/* Stack Lines (Pages indicator) */}
                   <path d="M15 72.5 L50 84.5 L85 72.5" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="M15 78.5 L50 90.5 L85 78.5" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                   {/* AI Star acting as a crown */}
                   <path d="M50 5 Q 50 33 22 33 Q 50 33 50 61 Q 50 33 78 33 Q 50 33 50 5 Z" fill="url(#starGrad)" />
                   
                   {/* Star Center */}
                   <circle cx="50" cy="33" r="7" fill="#ffffff" />
                   <circle cx="50" cy="33" r="3.5" fill="#fbbf24" />

                   {/* Floating Sparkles (Lấp lánh) */}
                   <circle cx="28" cy="18" r="3" fill="#fbbf24" />
                   <circle cx="72" cy="18" r="3" fill="#fbbf24" />
                   <circle cx="38" cy="48" r="2" fill="#fbbf24" />
                   <circle cx="62" cy="48" r="2" fill="#fbbf24" />
                </svg>
             </div>
          </div>
          
          {/* Center: Replaces the Hero section */}
          <div className="flex-1 flex flex-col items-center text-center justify-center overflow-hidden">
             <h1 className="text-xl sm:text-2xl md:text-[28px] font-black uppercase tracking-wide w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm pb-1 truncate">
                ỨNG DỤNG HỖ TRỢ GIÁO DỤC
             </h1>
             <p className="text-[11px] sm:text-xs text-amber-600/90 font-medium hidden md:block w-full pt-1 px-4 leading-tight">
                Hỗ trợ giáo viên tối ưu quy trình giảng dạy với các công cụ AI hiện đại và nâng tầm không gian số giáo dục.
             </p>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button className="px-3 sm:px-6 py-2 border-2 border-blue-600 text-blue-600 font-bold rounded-full text-xs sm:text-sm hover:bg-blue-50 transition-all whitespace-nowrap">
              API DEMO
            </button>
            <button 
              onClick={() => setIsPricingOpen(true)}
              className="px-3 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded-full text-xs sm:text-sm shadow-md shadow-blue-200 hover:bg-blue-700 transition-all whitespace-nowrap"
            >
              BẢNG GIÁ
            </button>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="p-1 sm:p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              title="Cài đặt giao diện"
            >
              <Settings size={20} />
            </button>
          </div>
        </nav>
  
        {/* Marquee Notice */}
        <div className="border-b border-rose-100 bg-rose-50/50 py-1 overflow-hidden whitespace-nowrap">
          <div className="marquee-container text-red-700 font-bold text-sm">
            <span className="marquee-content px-4">
              📞 MỌI CHI TIẾT XIN LIÊN HỆ THẦY HOÀNG VĂN ĐÌNH KHOA - ZALO: 0978.468.986 - ĐIỆN THOẠI: 0989.982.818 – CÔNG CỤ HỖ TRỢ GIÁO VIÊN 4.0 - TICH HỢP TRÍ TUỆ NHÂN TẠO AI
            </span>
          </div>
        </div>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden flex flex-col relative justify-between">
        <main className="max-w-5xl mx-auto pt-6 pb-2 w-full flex-grow">
  
          {/* 3. Applications Grid */}
          <div className="px-4 md:px-8 pb-10 space-y-16">
          {APP_CATEGORIES.map((category) => {
            const [emoji, ...textParts] = category.title.split(' ');
            const text = textParts.join(' ');
            
            return (
              <section key={category.id} className="scroll-mt-60" id={category.id}>
                
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-600 p-1.5 rounded-lg text-sm">{emoji}</span>
                    {text}
                  </h2>
                  <div className="h-px flex-grow bg-slate-200"></div>
                </div>
                
                {/* Changed grid layout max cols and sizes for much smaller cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.apps.map((app) => (
                    <div 
                      key={app.id} 
                      className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center relative"
                    >
                      
                      {/* Badges Stack - absolute top right to free up centering space */}
                      <div className="absolute top-3 right-3 flex flex-col gap-1 items-end z-10">
                        <span className="bg-blue-50 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded select-none">
                          LƯỢT: {appViews[app.id] || app.views}
                        </span>
                        {app.hot && (
                          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded select-none">
                            HOT
                          </span>
                        )}
                        {app.free ? (
                          <span className="bg-pink-100 text-pink-600 text-[9px] font-bold px-1.5 py-0.5 rounded select-none shadow-sm">
                            FREE
                          </span>
                        ) : (
                          <span className="bg-amber-100 text-amber-600 text-[9px] font-bold px-1.5 py-0.5 rounded select-none shadow-sm shadow-amber-200/50">
                            {app.price ? app.price : 'PRO'}
                          </span>
                        )}
                      </div>

                      {/* Icon */}
                      <div className={`mt-8 mb-3 w-10 h-10 rounded-xl flex items-center justify-center text-white ${app.iconBg}`} style={{marginTop: '1.75rem'}}>
                        <app.icon size={20} strokeWidth={2} />
                      </div>
                      
                      {/* Card Body */}
                      <div className="flex-1 mb-3 w-full flex flex-col items-center">
                        <h3 className="font-bold text-sm sm:text-base text-slate-800 text-center mb-1.5 group-hover:text-blue-600 transition-colors leading-tight px-1">
                          {app.name}
                        </h3>
                        <p className="text-slate-400 text-[11px] sm:text-xs text-center line-clamp-2 leading-relaxed px-1">
                          {app.desc}
                        </p>
                      </div>
                      
                      {/* Card Footer */}
                      <div className="w-full flex flex-col gap-2 mt-auto pt-3 border-t border-slate-50">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            if (app.guideDetails) {
                              setActiveGuideApp(app);
                            }
                          }}
                          className="text-emerald-500 font-bold text-[10px] sm:text-[11px] hover:underline block bg-transparent text-center"
                        >
                          Hướng dẫn -&gt;
                        </button>
                        
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            openIframeApp(app);
                          }}
                          className="w-full bg-blue-600 text-white px-2 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-bold hover:bg-blue-700 shadow shadow-blue-100 transition-all flex justify-center items-center gap-1 group whitespace-nowrap tracking-wide"
                        >
                          {app.actionText || 'ĐĂNG NHẬP'}
                        </button>
                      </div>
                      
                    </div>
                  ))}
                </div>
                
              </section>
            );
          })}
        </div>

      </main>

      {/* 4. Footer */}
      <footer className="w-full bg-noise py-1 text-center shrink-0 border-t border-amber-900/50 mt-auto overflow-hidden relative shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <p className="font-black text-[10px] sm:text-[11px] uppercase tracking-widest leading-tight text-gold-sparkle drop-shadow-md">
            NHÀ PHÁT TRIỂN - HOÀNG VĂN ĐÌNH KHOA
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-[0.1em] mt-[3px] leading-none font-bold text-gold-sparkle opacity-90 drop-shadow-md">
            Liên hệ Zalo: 0978.468.986 &nbsp;|&nbsp; Điện thoại: 0989.982.818
          </p>
        </div>
      </footer>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/20 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                <Settings size={24} className="text-blue-600" /> Cài đặt giao diện
              </h3>
              <button onClick={() => setIsSettingsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <p className="text-sm text-slate-500 font-medium mb-2">Chọn hình nền trang web:</p>
              
              <div className="mb-4">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <button
                    onClick={() => {
                      if (customBg) {
                        setTheme('custom-bg');
                      } else {
                        fileInputRef.current?.click();
                      }
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${theme === 'custom-bg' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl border border-slate-200 shadow-inner overflow-hidden flex items-center justify-center bg-slate-100`}>
                        {customBg ? (
                          <img src={customBg} alt="Custom bg" className="w-full h-full object-cover" />
                        ) : (
                          <Upload size={18} className="text-slate-400" />
                        )}
                      </div>
                      <div className="flex flex-col items-start">
                        <span className={`font-bold ${theme === 'custom-bg' ? 'text-blue-700' : 'text-slate-700'}`}>
                          Ảnh của bạn
                        </span>
                        {!customBg && <span className="text-xs text-slate-400">Tải ảnh lên từ thiết bị</span>}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {customBg && (
                        <div 
                          onClick={removeCustomBg}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Xóa ảnh tải lên"
                        >
                          <Trash2 size={16} />
                        </div>
                      )}
                      
                      {!customBg && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg transition-colors"
                        >
                          TẢI LÊN
                        </div>
                      )}

                      {theme === 'custom-bg' && (
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white ml-1">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${theme === t.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl border border-slate-200 shadow-inner ${t.className}`}></div>
                      <span className={`font-bold ${theme === t.id ? 'text-blue-700' : 'text-slate-700'}`}>{t.name}</span>
                    </div>
                    {theme === t.id && (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
              <button 
                onClick={() => setIsSettingsOpen(false)} 
                className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-all"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guide Modal Overlay */}
      {activeGuideApp && activeGuideApp.guideDetails && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header (Gradient Blue) */}
            <div className="bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] p-6 relative text-white">
                <button onClick={() => setActiveGuideApp(null)} className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"><X size={24} /></button>
                <div className="flex items-start gap-4 pr-12">
                  <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
                      <Info size={20} />
                  </div>
                  <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-1 leading-tight">{activeGuideApp.guideDetails.title}</h2>
                      <p className="text-blue-100/90 text-sm">{activeGuideApp.guideDetails.subtitle}</p>
                  </div>
                </div>
                {activeGuideApp.guideDetails.videoLink !== '#' && (
                  <a href={activeGuideApp.guideDetails.videoLink} target="_blank" rel="noreferrer" className="absolute top-6 right-16 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold uppercase py-1.5 px-3 rounded-full flex flex-col items-center justify-center shadow-lg transition-colors leading-[1.1]">
                    <span>XEM</span>
                    <span className="flex items-center gap-0.5"><PlayCircle size={10} /> VIDEO</span>
                    <span>HD</span>
                  </a>
                )}
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="flex items-center gap-2 text-blue-800 font-bold text-lg mb-2">
                      <Rocket size={20} /> Tổng quan ứng dụng
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{activeGuideApp.guideDetails.overview}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {activeGuideApp.guideDetails.features.map((f: any) => (
                        <div key={f.id} className="border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow bg-slate-50/50">
                            <div className={`mb-3 ${f.color}`}><f.icon size={24} strokeWidth={1.5} /></div>
                            <h4 className={`font-bold text-sm mb-2 ${f.color}`}>{f.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
                
                <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5 mb-2">
                  <h3 className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-4">
                      <Lightbulb size={20} /> {(activeGuideApp.guideDetails.steps || []).length} Bước để bắt đầu
                  </h3>
                  <div className="space-y-4">
                      {activeGuideApp.guideDetails.steps.map((s: any) => (
                          <div key={s.step} className="flex gap-3">
                              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 self-start mt-0.5">{s.step}</div>
                              <p className="text-sm text-slate-700"><strong className="text-slate-900">{s.title}:</strong> {s.desc}</p>
                          </div>
                      ))}
                  </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-white">
                <button 
                  onClick={() => { 
                    const app = activeGuideApp;
                    setActiveGuideApp(null); 
                    openIframeApp(app); 
                  }} 
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold uppercase tracking-wide transition-colors shadow-md shadow-blue-200"
                >
                  {activeGuideApp.actionText || 'Tôi đã hiểu, khám phá ngay'}
                </button>
            </div>
          </div>
        </div>
      )}

      {/* External App Fullscreen Wrapper */}
      {activeIframeApp && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col animate-in fade-in zoom-in-95 duration-200">
           <div className="flex-1 bg-slate-50 relative w-full h-full">
             {isIframeLoading && (
               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50">
                 <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                 <p className="text-slate-500 font-medium">Đang tải ứng dụng...</p>
               </div>
             )}
             
             <iframe 
               src={activeIframeApp.url} 
               onLoad={() => setIsIframeLoading(false)}
               className={`absolute inset-0 w-full h-full border-none bg-white transition-opacity duration-500 ${isIframeLoading ? 'opacity-0' : 'opacity-100'}`} 
               title={activeIframeApp.name}
             />
             
             {/* Floating Home Button */}
             <button 
                onClick={() => setActiveIframeApp(null)} 
                className="absolute top-2 left-2 z-[210] flex items-center justify-center w-10 h-10 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg transition-all group"
                title="Quay lại trang chủ"
              >
                 <Home size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
             </button>
           </div>
        </div>
      )}

      {/* Pricing Modal */}
      {isPricingOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsPricingOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] pt-8 pb-10 px-6 text-center relative shrink-0">
               <button 
                  onClick={() => setIsPricingOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
               <div className="w-14 h-14 bg-white/20 rounded-2xl mx-auto flex items-center justify-center mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect><line x1="3" y1="11" x2="21" y2="11"></line></svg>
               </div>
               <h2 className="text-2xl font-black text-white uppercase tracking-wide">BẢNG GIÁ DỊCH VỤ</h2>
               <p className="text-white/90 text-xs tracking-widest font-medium uppercase mt-1">Nâng tầm công nghệ giáo dục</p>
            </div>
            
            {/* List */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3 bg-slate-50">
               {/* App Nhận xét điểm */}
               <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center shadow-sm">
                 <div className="text-emerald-500 mr-3 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 </div>
                 <div className="flex-1 text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                   APP NHẬN XÉT ĐIỂM + HỌC BẠ (1 NĂM)
                 </div>
                 <div className="text-red-500 font-black text-sm ml-3 shrink-0">100K</div>
               </div>

               {/* App Ước mơ tương lai */}
               <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center shadow-sm">
                 <div className="text-emerald-500 mr-3 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 </div>
                 <div className="flex-1 text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                   APP ƯỚC MƠ TƯƠNG LAI AI (TRỌN ĐỜI)
                 </div>
                 <div className="text-red-500 font-black text-sm ml-3 shrink-0">50K</div>
               </div>

               {/* App Sửa Thời Gian Taskbar */}
               <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center shadow-sm">
                 <div className="text-emerald-500 mr-3 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 </div>
                 <div className="flex-1 text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                   SỬA ẢNH THỜI GIAN TASKBAR (NẠP ĐIỂM)
                 </div>
                 <div className="text-red-500 font-black text-sm ml-3 shrink-0">1 ĐIỂM = 1 LẦN</div>
               </div>

               {/* Tiện Ích Nhận Xét */}
               <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center shadow-sm">
                 <div className="text-emerald-500 mr-3 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 </div>
                 <div className="flex-1 text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                   TIỆN ÍCH TỰ ĐỘNG ĐIỀN NHẬN XÉT (TRỌN ĐỜI)
                 </div>
                 <div className="text-red-500 font-black text-sm ml-3 shrink-0">LIÊN HỆ</div>
               </div>

               {/* App Lên kế hoạch - Combined */}
               <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 flex flex-col gap-3 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                 
                 <div className="flex items-center w-full ml-1">
                   <div className="text-emerald-500 mr-3 shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <div className="flex-1 text-[12px] sm:text-[13px] font-bold text-slate-800 leading-snug">
                     APP LÊN KẾ HOẠCH BÀI DẠY
                   </div>
                 </div>
                 
                 <div className="w-full flex flex-col gap-2 pl-9">
                    {/* Tier 1 */}
                    <div className="flex items-center justify-between bg-white/70 p-2 rounded-lg border border-amber-100">
                      <span className="text-[11px] font-semibold text-slate-600">Gói VIP 1 Tháng</span>
                      <span className="text-red-500 font-black text-sm">20K</span>
                    </div>
                    {/* Tier 2 */}
                    <div className="flex items-center justify-between bg-white/90 p-2 rounded-lg border border-amber-300 shadow-sm relative">
                      <span className="text-[11px] font-bold text-slate-800 flex items-center gap-2">
                        Gói VIP 1 Năm <span className="inline-block px-1.5 py-0.5 bg-amber-500 text-white text-[9px] rounded font-black">HOT</span>
                      </span>
                      <span className="text-red-600 font-black text-base">100K</span>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Footer Action */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
               <button 
                  onClick={() => setIsPricingOpen(false)}
                  className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-lg"
               >
                 ĐÓNG BẢNG GIÁ
               </button>
            </div>
            
          </div>
        </div>
      )}
      
      </div> {/* End of scrollable main area */}
    </div>
  );
}