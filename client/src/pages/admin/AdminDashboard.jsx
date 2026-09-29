import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Clock3,
  LogOut,
  Mail,
  MessageSquare,
  RefreshCw,
  Search,
  User,
  X,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [search, setSearch] = useState("");

  const admin = JSON.parse(localStorage.getItem("admin") || "{}");

  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/inquiries"
      );

      setInquiries(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin");
      return;
    }

    fetchInquiries();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  const stats = useMemo(() => {
    return {
      total: inquiries.length,
      new: inquiries.filter((item) => item.status === "New").length,
      progress: inquiries.filter(
        (item) => item.status === "In Progress"
      ).length,
      converted: inquiries.filter(
        (item) => item.status === "Converted"
      ).length,
    };
  }, [inquiries]);

  const filteredInquiries = inquiries.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.company?.toLowerCase().includes(query) ||
      item.service?.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="text-lg font-bold tracking-tight">
              YOUR<span className="text-cyan-400">COMPANY</span>
            </p>

            <p className="text-xs text-zinc-600">Admin Dashboard</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">{admin.name || "Admin"}</p>
              <p className="text-xs text-zinc-500">
                {admin.email || ""}
              </p>
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-400 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400"
            >
              <LogOut size={16} />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-8 md:py-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Overview
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Welcome back, {admin.name || "Admin"}.
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            Manage your client inquiries and project opportunities.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={BarChart3}
            title="Total Inquiries"
            value={stats.total}
          />

          <StatCard
            icon={MessageSquare}
            title="New"
            value={stats.new}
          />

          <StatCard
            icon={Clock3}
            title="In Progress"
            value={stats.progress}
          />

          <StatCard
            icon={CheckCircle2}
            title="Converted"
            value={stats.converted}
          />
        </div>

        {/* Inquiry section */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-950">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 p-5 md:flex-row md:items-center md:p-6">
            <div>
              <h2 className="text-xl font-semibold">
                Client Inquiries
              </h2>

              <p className="mt-1 text-sm text-zinc-600">
                Review and manage incoming project requests.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1 md:w-72">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search inquiries..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-cyan-400/40"
                />
              </div>

              <button
                onClick={fetchInquiries}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <RefreshCw
                  size={16}
                  className={loading ? "animate-spin" : ""}
                />
              </button>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-zinc-600">
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Budget</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody>
                {filteredInquiries.map((inquiry) => (
                  <InquiryRow
                    key={inquiry._id}
                    inquiry={inquiry}
                    onClick={() => setSelectedInquiry(inquiry)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 p-4 md:hidden">
            {filteredInquiries.map((inquiry) => (
              <button
                key={inquiry._id}
                onClick={() => setSelectedInquiry(inquiry)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{inquiry.name}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {inquiry.email}
                    </p>
                  </div>

                  <StatusBadge status={inquiry.status} />
                </div>

                <div className="mt-4 flex justify-between text-xs text-zinc-500">
                  <span>{inquiry.service}</span>
                  <span>{inquiry.budget || "No budget"}</span>
                </div>
              </button>
            ))}
          </div>

          {!loading && filteredInquiries.length === 0 && (
            <div className="px-6 py-16 text-center">
              <MessageSquare className="mx-auto text-zinc-700" size={35} />
              <p className="mt-4 text-sm text-zinc-500">
                No inquiries found.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Modal */}
      {selectedInquiry && (
        <InquiryModal
          inquiry={selectedInquiry}
          onClose={() => setSelectedInquiry(null)}
        />
      )}
    </main>
  );
};

const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{title}</p>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Icon size={17} />
        </div>
      </div>

      <p className="mt-5 text-3xl font-semibold">{value}</p>
    </motion.div>
  );
};

const InquiryRow = ({ inquiry, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.025]"
    >
      <td className="px-6 py-5">
        <div>
          <p className="text-sm font-medium">{inquiry.name}</p>
          <p className="mt-1 text-xs text-zinc-600">
            {inquiry.email}
          </p>
        </div>
      </td>

      <td className="px-6 py-5 text-sm text-zinc-400">
        {inquiry.service}
      </td>

      <td className="px-6 py-5 text-sm text-zinc-400">
        {inquiry.budget || "—"}
      </td>

      <td className="px-6 py-5">
        <StatusBadge status={inquiry.status} />
      </td>

      <td className="px-6 py-5 text-xs text-zinc-600">
        {new Date(inquiry.createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-5">
        <span className="text-xs text-cyan-400">View</span>
      </td>
    </tr>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    New: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    Contacted: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    "In Progress":
      "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    Converted:
      "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    Closed: "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${
        styles[status] || styles.New
      }`}
    >
      {status}
    </span>
  );
};

const InquiryModal = ({ inquiry, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-cyan-400">
              Inquiry Details
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {inquiry.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          <Info label="Email" value={inquiry.email} />
          <Info label="Phone" value={inquiry.phone || "Not provided"} />
          <Info
            label="Company"
            value={inquiry.company || "Not provided"}
          />
          <Info label="Service" value={inquiry.service} />
          <Info label="Budget" value={inquiry.budget || "Not provided"} />
          <Info label="Status" value={inquiry.status} />

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              Requirements
            </p>

            <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-400">
              {inquiry.message}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              Submitted
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              {new Date(inquiry.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-600">
        {label}
      </p>
      <p className="mt-2 break-words text-sm text-zinc-300">
        {value}
      </p>
    </div>
  );
};

export default AdminDashboard;